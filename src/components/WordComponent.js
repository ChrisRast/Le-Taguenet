import React from 'react';
import PropTypes from 'prop-types';

export default class WordComponent extends React.PureComponent {
    static propTypes = {
        word: PropTypes.string
    }

    static defaultProps = {
        word: ''
    }

    static contextTypes = {
        validateWord: PropTypes.func
    }

    state= {
        valid: false,
        value: ''
    }

    onChangeValidateWord () {
        const {
            validateWord
        } = this.context;
        const {
            word
        } = this.props;
        const {
            value
        } = this.refs.input;
        let valid = false;
        if (typeof validateWord === 'function') {
            valid = validateWord(value, word);
        }
        this.setState({
            valid,
            value
        });
    }

    render () {
        const {
            value,
            valid
        } = this.state;
        const borderColor = valid ? 'green' : 'red';
        return (
            <input
                style={{
                    borderWidth: 0,
                    borderBottom: `1px solid ${borderColor}`
                }}
                ref="input"
                type="text"
                value={value}
                onChange={this.onChangeValidateWord.bind(this)}
            />
        );
    }
}
