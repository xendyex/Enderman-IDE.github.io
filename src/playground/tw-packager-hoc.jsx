import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import VirtualMachine from 'scratch-vm';
import {openLoadingProject, closeLoadingProject} from '../reducers/modals';
import {setUsername} from '../reducers/tw';
import {getIsLoadingUpload, onLoadedProject, requestProjectUpload} from '../reducers/project-state';
import packagerOptions from '../lib/tw-packager-options';

const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // ignore
    }
};

const getLocalStorage = key => {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        // ignore
    }
    return null;
};

const TWPackagerHOC = function (WrappedComponent) {
    class PackagerComponent extends React.Component {
        componentDidMount () {
            if (packagerOptions.user.username) {
                this.props.onSetUsername(packagerOptions.user.username);
            } else {
                const USERNAME_KEY = 'tw.packager:username';
                const persistentUsername = getLocalStorage(USERNAME_KEY);
                if (persistentUsername === null) {
                    const DIGITS = 4;
                    const randomNumber = Math.round(Math.random() * (10 ** DIGITS));
                    const randomId = randomNumber.toString().padStart(DIGITS, '0');
                    const randomUsername = `player${randomId}`;
                    this.props.onSetUsername(randomUsername);
                    setLocalStorage(randomUsername);
                } else {
                    this.props.onSetUsername(persistentUsername);
                }
            }

            this.props.requestProjectUpload(this.props.loadingState);
        }
        componentDidUpdate (prevProps) {
            if (this.props.isLoadingUpload && !prevProps.isLoadingUpload) {
                this.loadProject();
            }
        }
        loadProject () {
            this.props.onLoadingStarted();

            // projectData might be a data: URI or a path to a file, fetch will deal with both of these.
            fetch(packagerOptions.init.projectData)
                .then(res => res.arrayBuffer())
                .then(buffer => {
                    // project data is not needed anymore, so remove it.
                    // this is important as the project data can often be quite large
                    packagerOptions.init.projectData = '';
                    return this.props.vm.loadProject(buffer);
                })
                .then(() => {
                    this.props.onLoadingFinished(this.props.loadingState, true);
                })
                .catch(e => {
                    this.props.onLoadingFinished(this.props.loadingState, false);
                    alert(e); // eslint-disable-line no-alert
                });
        }
        handleVmInit (vm) {
            packagerOptions.init.handleVmInit(vm);
        }
        handleProjectLoaded () {
            packagerOptions.init.handleProjectLoaded();
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
                onLoadingFinished,
                onLoadingStarted,
                onSetUsername,
                vm,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return (
                <WrappedComponent
                    {...props}
                    onVmInit={this.handleVmInit}
                    onProjectLoaded={this.handleProjectLoaded}
                />
            );
        }
    }
    PackagerComponent.propTypes = {
        vm: PropTypes.instanceOf(VirtualMachine),
        isLoadingUpload: PropTypes.bool,
        loadingState: PropTypes.string,
        onLoadingFinished: PropTypes.func,
        onLoadingStarted: PropTypes.func,
        onSetUsername: PropTypes.func,
        requestProjectUpload: PropTypes.func
    };
    const mapStateToProps = state => ({
        isLoadingUpload: getIsLoadingUpload(state.scratchGui.projectState.loadingState),
        loadingState: state.scratchGui.projectState.loadingState,
        vm: state.scratchGui.vm
    });
    const mapDispatchToProps = dispatch => ({
        onLoadingFinished: (loadingState, success) => {
            dispatch(onLoadedProject(loadingState, false, success));
            dispatch(closeLoadingProject());
        },
        onLoadingStarted: () => dispatch(openLoadingProject()),
        onSetUsername: username => dispatch(setUsername(username)),
        requestProjectUpload: loadingState => dispatch(requestProjectUpload(loadingState))
    });
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(PackagerComponent);
};

export {
    TWPackagerHOC as default
};
