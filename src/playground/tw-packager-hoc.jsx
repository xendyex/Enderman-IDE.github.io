import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import VirtualMachine from 'scratch-vm';
import {openLoadingProject, closeLoadingProject} from '../reducers/modals';
import {setUsername} from '../reducers/tw';
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

            this.props.onLoadingStarted();

            // fetch the project data from the global variable that the packager stores it in
            // this will either convert the data: URI to an array buffer for us, or fetch it from another file
            fetch(packagerOptions.init.projectData)
                .then(res => res.arrayBuffer())
                .then(buffer => {
                    // project data is not needed anymore, so remove it.
                    // this is important as the project data can often be quite large
                    packagerOptions.init.projectData = '';
                    return this.props.vm.loadProject(buffer);
                })
                .then(() => {
                    this.props.onLoadingFinished();
                    this.props.vm.renderer.draw();
                })
                .catch(e => {
                    alert(e); // eslint-disable-line no-alert
                });
        }
        handleVmInit (vm) {
            packagerOptions.init.handleVmInit(vm);
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
                />
            );
        }
    }
    PackagerComponent.propTypes = {
        vm: PropTypes.instanceOf(VirtualMachine),
        onLoadingFinished: PropTypes.func,
        onLoadingStarted: PropTypes.func,
        onSetUsername: PropTypes.func
    };
    const mapStateToProps = state => ({
        vm: state.scratchGui.vm
    });
    const mapDispatchToProps = dispatch => ({
        onLoadingStarted: () => dispatch(openLoadingProject()),
        onLoadingFinished: () => dispatch(closeLoadingProject()),
        onSetUsername: username => dispatch(setUsername(username))
    });
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(PackagerComponent);
};

export {
    TWPackagerHOC as default
};
