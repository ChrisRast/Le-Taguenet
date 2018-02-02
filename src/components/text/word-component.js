import React from 'react';
import PropTypes from 'prop-types';
import * as ui from 'semantic-ui-react';

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
		value: '',
		displayed: false
	}

	typing = false;

	/**
	 * @constructor
	 */
	constructor () {
		super(...arguments);

		this.onChangeValidateWord = this.onChangeValidateWord.bind(this);
		this.toggleDisplayWord = this.toggleDisplayWord.bind(this);
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

	toggleDisplayWord () {
		const {
			displayed
		} = this.state;
		this.setState({
			displayed: !displayed
		});
	}

	getIconChild () {
		const {
			displayed
		} = this.state;
		return (
			<ui.Icon
				link
				// size="small"
				fitted
				onClick={this.toggleDisplayWord}
				name={displayed ? 'hide' : 'unhide'}
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
		const borderColor = word.validity ? 'MediumSeaGreen' : 'Tomato';

		return (
			<div>
				<span>{word.strict}</span>
				{/* Apply width afterwards */}
				<ui.Input
					// icon={this.getIconChild()}
					transparent
					style={{
						borderBottom: `1px solid ${borderColor}`
					}}
					fluid
					type="text"
					className="text"
					value={value}
					onChange={this.onChangeValidateWord}
					placeholder={displayed ? word.strict : ''}
				/>
			</div>
		);
	}
}
