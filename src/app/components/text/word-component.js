import React from 'react';
import PropTypes from 'prop-types';

export default class WordComponent extends React.PureComponent {
	static propTypes = {
		register: PropTypes.func,
		word: PropTypes.string
	}

	static defaultProps = {
		register: null,
		word: ''
	}

	static contextTypes = {
		validateWord: PropTypes.func
	}

	state = {
		valid: false,
		value: ''
	}

	typing = false;

	/**
	 * Invoked once, both on the client and server, immediately before the initial rendering occurs.
	 * @protected
	 * @method componentWillMount
	 * @return {void}
	 */
	componentWillMount () {
		const {
			register,
			word
		} = this.props;
		if (typeof register === 'function') {
			register(word, this);
		}
	}


	/**
	 * Invoked immediately before a component is unmounted from the DOM.
	 * @protected
	 * @method componentWillUnmount
	 * @return {void}
	 */
	componentWillUnmount () {
		const {
			register,
			word
		} = this.props;
		if (typeof register === 'function') {
			register(word, null);
		}
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
		const borderColor = valid ? 'lightgreen' : 'orange';
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
