import React from 'react';
import PropTypes from 'prop-types';
import * as ui from 'semantic-ui-react';

export default class WordComponent extends React.PureComponent {
	/**
	 * Range of validators that can be used to make sure the received data is valid
	 * @public
	 * @type {Object}
	 */
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

	/**
	 * Default state of the component
	 * @protected
	 * @type {Object}
	 */
	state = {
		value: '',
		displayed: false
	}

	/**
	 * True if the user is typing
	 * @type {Boolean}
	 */
	typing = false;

	/**
	 * Reference of the input
	 * @type {Object}
	 */
	inputRef = null;

	/**
	 * @constructor
	 */
	constructor () {
		super(...arguments);

		this.inputRef = React.createRef();
		this.onChangeValidateWord = this.onChangeValidateWord.bind(this);
		this.displayWord = this.displayWord.bind(this);
		this.hideWord = this.hideWord.bind(this);
	}

	/**
	 * Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
	 * @protected
	 * @method componentDidUpdate
	 * @param  {object}   prevProps  The prev properties of the component
	 * @param  {object}   prevState  The prev state of the component
	 * @return {void}
	 */
	componentDidUpdate (prevProps, prevState) {
		// console.log("this.inputRef", this.inputRef);
	}

	onChangeValidateWord (e) {
		const {
			validateWord
		} = this.context;
		const {
			word
		} = this.props;
		const {
			value
		} = e.target;
		if (typeof validateWord === 'function') {
			validateWord(value, word);
		}
		this.setState({
			value
		});
	}

	displayWord () {
		this.setState({
			displayed: true
		});
	}

	hideWord () {
		this.setState({
			displayed: false
		});
	}

	getDisplayWordIcon () {
		const {
			displayed
		} = this.state;
		return (
			<ui.Icon
				link
				size="small"
				fitted
				onMouseDown={this.displayWord}
				onMouseUp={this.hideWord}
				onBlur={this.hideWord}
				name={displayed ? 'unhide' : 'hide'}
			/>
		);
	}
	getValidityIcon () {
		const {
			word
		} = this.props;

		return (
			<ui.Icon
				link
				size="small"
				onMouseDown={this.displayWord}
				onMouseUp={this.hideWord}
				name={word.validity ? 'check' : 'x'}
				color={word.validity ? 'green' : 'red'}
			/>
		);
	}

	render () {
		const {
			value,
			displayed
		} = this.state;
		const {
			word
		} = this.props;

		return (
			<ui.Input
				ref={this.inputRef}
				transparent
				type="text"
				className="text word"
				value={displayed ? '' : value}
				focus
				onChange={this.onChangeValidateWord}
				placeholder={displayed ? word.strict : ''}
			>
				<input />
				{this.getValidityIcon()}
				{this.getDisplayWordIcon()}
			</ui.Input>
		);
	}
}
