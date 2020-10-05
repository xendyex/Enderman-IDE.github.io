import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    openLoadingProject,
    closeLoadingProject
} from '../reducers/modals';

const TWPackagerHOC = function (WrappedComponent) {
    class PackagerComponent extends React.Component {
        componentDidMount () {
            // fetch the project data from the global variable that the packager stores it in
            // this will either convert the data: URI to an array buffer for us, or fetch it from another file
            const projectData = window.__PROJECT_DATA__;
            this.props.onLoadingStarted();
            fetch(projectData)
                .then(res => res.arrayBuffer())
                .then(buffer => {
                    // global project data is not needed anymore, so remove it.
                    // this is important as the project data can often be quite large
                    window.__PROJECT_DATA__ = '';
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
        render () {
            const {
                /* eslint-disable no-unused-vars */
                onLoadingFinished,
                onLoadingStarted,
                vm,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return (
                <WrappedComponent
                    {...props}
                />
            );
        }
    }
    PackagerComponent.propTypes = {
        vm: PropTypes.shape({
            loadProject: PropTypes.func,
            renderer: PropTypes.shape({
                draw: PropTypes.func
            })
        }),
        onLoadingFinished: PropTypes.func,
        onLoadingStarted: PropTypes.func
    };
    const mapStateToProps = state => ({
        vm: state.scratchGui.vm
    });
    const mapDispatchToProps = dispatch => ({
        onLoadingStarted: () => dispatch(openLoadingProject()),
        onLoadingFinished: () => dispatch(closeLoadingProject())
    });
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(PackagerComponent);
};

export {
    TWPackagerHOC as default
};
