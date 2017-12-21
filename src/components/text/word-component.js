import React from 'react';
import PropTypes from 'prop-types';

export default class WordComponent extends React.PureComponent {
	static propTypes = {
		strict: PropTypes.bool,
		word: PropTypes.shape({
			loose: PropTypes.string,
			canton: PropTypes.string,
			difficulty: PropTypes.number,
			strict: PropTypes.string,
			validity: PropTypes.bool
		}).isRequired
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		strict: false,
		words: {}
	}

	static contextTypes = {
		validateWord: PropTypes.func
	}

	state = {
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
		} = this.wordRefInput;
		if (typeof validateWord === 'function') {
			validateWord(value, word);
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
				ref={(ref) => { this.wordRefInput = ref; }}
				type="text"
				value={value}
				onChange={this.onChangeValidateWord.bind(this)}
			/>
		);
	}
}
