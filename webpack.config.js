const defaultsDeep = require('lodash.defaultsdeep');
var path = require('path');
var webpack = require('webpack');

// Plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// PostCss
var autoprefixer = require('autoprefixer');
var postcssVars = require('postcss-simple-vars');
var postcssImport = require('postcss-import');

const STATIC_PATH = process.env.STATIC_PATH || '/static';

const base = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: process.env.SOURCEMAP ? process.env.SOURCEMAP : process.env.NODE_ENV === 'production' ? false : 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        host: '0.0.0.0',
        compress: true,
        port: process.env.PORT || 8601
    },
    output: {
        library: 'GUI',
        filename: process.env.NODE_ENV === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js',
        chunkFilename: process.env.NODE_ENV === 'production' ? 'js/[name].[contenthash].js' : 'js/[name].js'
    },
    resolve: {
        symlinks: false,
        alias: {
            'text-encoding$': path.resolve(__dirname, 'src/lib/tw-text-encoder'),
            'scratch-render-fonts$': path.resolve(__dirname, 'src/lib/tw-scratch-render-fonts')
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'src'),
                /node_modules[\\/]scratch-[^\\/]+[\\/]src/,
                /node_modules[\\/]pify/,
                /node_modules[\\/]@vernier[\\/]godirect/
            ],
            options: {
                // Explicitly disable babelrc so we don't catch various config
                // in much lower dependencies.
                babelrc: false,
                plugins: [
                    ['react-intl', {
                        messagesDir: './translations/messages/'
                    }]],
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
        {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    camelCase: true
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: function () {
                        return [
                            postcssImport,
                            postcssVars,
                            autoprefixer
                        ];
                    }
                }
            }]
        }]
    },
    plugins: []
};

if (!process.env.CI) {
    base.plugins.push(new webpack.ProgressPlugin());
}

module.exports = [
    // to run editor examples
    defaultsDeep({}, base, {
        entry: {
            'editor': './src/playground/editor.jsx',
            'player': './src/playground/player.jsx',
            'fullscreen': './src/playground/fullscreen.jsx',
            'embed': './src/playground/embed.jsx',
            'addon-settings': './src/playground/addon-settings.jsx'
        },
        output: {
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: base.module.rules.concat([
                {
                    test: /\.(svg|png|wav|gif|jpg|mp3|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/assets/'
                    }
                }
            ])
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                minChunks: 2,
                minSize: 50000,
                maxInitialRequests: 5
            }
        },
        plugins: base.plugins.concat([
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"',
                'process.env.DEBUG': Boolean(process.env.DEBUG)
            }),
            new HtmlWebpackPlugin({
                chunks: ['editor'],
                template: 'src/playground/index.ejs',
                filename: 'editor.html',
                title: 'GUI playground'
            }),
            new HtmlWebpackPlugin({
                chunks: ['player'],
                template: 'src/playground/index.ejs',
                filename: 'index.html',
                title: 'GUI playground'
            }),
            new HtmlWebpackPlugin({
                chunks: ['fullscreen'],
                template: 'src/playground/index.ejs',
                filename: 'fullscreen.html',
                title: 'GUI playground'
            }),
            new HtmlWebpackPlugin({
                chunks: ['embed'],
                template: 'src/playground/index.ejs',
                filename: 'embed.html',
                title: 'GUI playground'
            }),
            new HtmlWebpackPlugin({
                chunks: ['addon-settings'],
                template: 'src/playground/index.ejs',
                filename: 'addons.html',
                title: 'Addon Settings'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'static',
                        to: ''
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'node_modules/scratch-blocks/media',
                        to: 'static/blocks-media'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'extensions/**',
                        to: 'static',
                        context: 'src/examples'
                    }
                ]
            })
        ])
    })
].concat(
    process.env.NODE_ENV === 'production' || process.env.BUILD_MODE === 'dist' ? (
        // export as library
        // tw: TODO: need to see if this even works anymore
        defaultsDeep({}, base, {
            target: 'web',
            entry: {
                'scratch-gui': './src/index.js',
                'addons': './src/addons/entry.js',
                'addon-settings': './src/addons/settings/settings.jsx'
            },
            output: {
                libraryTarget: 'umd',
                path: path.resolve('dist'),
                publicPath: `${STATIC_PATH}/`
            },
            externals: {
                'react': 'react',
                'react-dom': 'react-dom'
            },
            module: {
                rules: base.module.rules.concat([
                    {
                        test: /\.(svg|png|wav|gif|jpg|mp3|ttf|otf)$/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static/assets/',
                            publicPath: `${STATIC_PATH}/assets/`
                        }
                    }
                ])
            },
            plugins: base.plugins.concat([
                new CopyWebpackPlugin({
                    patterns: [
                        {
                            from: 'node_modules/scratch-blocks/media',
                            to: 'static/blocks-media'
                        }
                    ]
                }),
                // Include library JSON files for scratch-desktop to use for downloading
                new CopyWebpackPlugin({
                    patterns: [
                        {
                            from: 'src/lib/libraries/*.json',
                            to: 'libraries',
                            flatten: true
                        }
                    ]
                })
            ])
        })) : []
);
