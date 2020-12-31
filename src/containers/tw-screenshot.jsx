import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import downloadBlob from '../lib/download-blob';

const messages = defineMessages({
    filename: {
        defaultMessage: 'screenshot.png',
        description: 'Name of file when taking a screenshot',
        id: 'tw.screenshot.filename'
    }
});

class Screenshot extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'screenshot'
        ]);
    }
    screenshot () {
        this.props.vm.renderer.requestSnapshot(async snapshot => {
            const res = await fetch(snapshot);
            const blob = await res.blob();
            downloadBlob(this.props.intl.formatMessage(messages.filename), blob);
        });
    }
    render () {
        const {
            /* eslint-disable no-unused-vars */
            children,
            intl,
            vm,
            /* eslint-enable no-unused-vars */
            ...props
        } = this.props;
        return this.props.children(this.screenshot, props);
    }
}

Screenshot.propTypes = {
    intl: intlShape,
    vm: PropTypes.shape({
        renderer: PropTypes.shape({
            requestSnapshot: PropTypes.func
        })
    })
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    highQualityPen: state.scratchGui.tw.highQualityPen
});

export default injectIntl(connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(Screenshot));
