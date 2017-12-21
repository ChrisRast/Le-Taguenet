import React from 'react';
import PropTypes from 'prop-types';

export default class WordComponent extends React.PureComponent {
	static propTypes = {
		word: PropTypes.shape({
			loose: PropTypes.string,
			canton: PropTypes.string,
			difficulty: PropTypes.number,
			strict: PropTypes.string,
			validity: PropTypes.bool
		}).isRequired
	}

	static contextTypes = {
		validateWord: PropTypes.func
	}

	state = {
		valid: false,
		value: ''
	}

	typing = false;

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
		if (typeof validateWord === 'function') {
			validateWord(value, word.loose);
		}
		this.setState({
			value
		});
	}

	render () {
		const {
			value
		} = this.state;
		const {
			word
		} = this.props;
		const borderColor = word.validity ? 'lightgreen' : 'orange';
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
