/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import ErrorBoundaryHOC from '../lib/error-boundary-hoc.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import TWThemeHOC from '../lib/tw-theme-hoc.jsx';
import SBFileUploaderHOC from '../lib/sb-file-uploader-hoc.jsx';
import SettingsStore from '../addons/settings-store-singleton';
import '../lib/tw-fix-history-api';
import GUI from './render-gui.jsx';
import MenuBar from '../components/menu-bar/menu-bar.jsx';
import WebGlModal from '../containers/webgl-modal.jsx';
import BrowserModal from '../components/browser-modal/browser-modal.jsx';
import {isRendererSupported, isBrowserSupported} from '../lib/tw-environment-support-prober';
import AddonChannels from '../addons/channels';
import runAddons from '../addons/entry';

import styles from './interface.css';

const handleClickAddonSettings = () => {
    window.open('addons.html');
};

const WrappedMenuBar = compose(
    SBFileUploaderHOC
)(MenuBar);

if (AddonChannels.reloadChannel) {
    AddonChannels.reloadChannel.addEventListener('message', () => {
        location.reload();
    });
}

if (AddonChannels.changeChannel) {
    AddonChannels.changeChannel.addEventListener('message', e => {
        SettingsStore.setStoreWithVersionCheck(e.data);
    });
}

runAddons();

const Playground = props => {
    const {
        /* eslint-disable no-unused-vars */
        isFullScreen,
        isPlayerOnly,
        isRtl,
        onClickTheme,
        /* eslint-enable no-unused-vars */
        ...guiProps
    } = props;
    const isHomepage = isPlayerOnly && !isFullScreen;
    const isEditor = !isPlayerOnly;
    return (
        <div
            className={classNames(styles.container, {
                [styles.playerOnly]: isHomepage,
                [styles.editor]: isEditor
            })}
        >
            {isHomepage ? (
                <div className={styles.menu}>
                    <WrappedMenuBar
                        canChangeLanguage
                        canManageFiles
                        enableSeeInside
                        onClickAddonSettings={handleClickAddonSettings}
                        onClickTheme={onClickTheme}
                    />
                </div>
            ) : null}
            <div
                className={styles.center}
                style={isPlayerOnly ? ({
                    // add a couple pixels to account for border
                    width: `${Math.max(480, props.customStageSize.width) + 2}px`
                }) : null}
            >
                <GUI
                    onClickAddonSettings={handleClickAddonSettings}
                    onClickTheme={onClickTheme}
                    backpackVisible
                    backpackHost="_local_"
                    {...guiProps}
                />
                {isHomepage ? (
                    <React.Fragment>
                        {isRendererSupported() ? null : (
                            <WebGlModal isRtl={isRtl} />
                        )}
                        {isBrowserSupported() ? null : (
                            <BrowserModal isRtl={isRtl} />
                        )}
                    </React.Fragment>
                ) : null}
            </div>
        </div>
    );
};

Playground.propTypes = {
    customStageSize: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),
    isFullScreen: PropTypes.bool,
    isPlayerOnly: PropTypes.bool,
    isRtl: PropTypes.bool,
    onClickTheme: PropTypes.func
};

const mapStateToProps = state => ({
    customStageSize: state.scratchGui.customStageSize,
    isFullScreen: state.scratchGui.mode.isFullScreen,
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
    isRtl: state.locales.isRtl
});

const mapDispatchToProps = () => ({});

const ConnectedPlayground = connect(
    mapStateToProps,
    mapDispatchToProps
)(Playground);

const WrappedPlayground = compose(
    AppStateHOC,
    ErrorBoundaryHOC('Playground'),
    HashParserHOC,
    TWThemeHOC
)(ConnectedPlayground);

export default WrappedPlayground;
