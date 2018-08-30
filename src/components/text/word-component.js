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
		difficulty: PropTypes.number,
		word: PropTypes.shape({
			loose: PropTypes.string,
			canton: PropTypes.string,
			difficulty: PropTypes.number,
			strict: PropTypes.string,
			validity: PropTypes.bool,
		}).isRequired,
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		strict: false,
		difficulty: 2,
		words: {},
	}

	static contextTypes = {
		validateWord: PropTypes.func,
	}

	/**
	 * Default state of the component
	 * @protected
	 * @type {Object}
	 */
	state = {
		value: '',
	}

	/**
	 * True if the user is typing
	 * @type {Boolean}
	 */
	typing = false;

	/**
	 * @constructor
	 */
	constructor (props) {
		super(...props);

		this.onChangeValidateWord = this.onChangeValidateWord.bind(this);
	}

	onChangeValidateWord (e) {
		const {
			validateWord,
		} = this.context;
		const {
			word,
		} = this.props;
		const {
			value,
		} = e.target;
		if (typeof validateWord === 'function') {
			validateWord(value, word);
		}
		this.setState({
			value,
		});
	}

	isValid () {
		const {
			word,
		} = this.props;
		const {
			value,
		} = this.state;

		return word.validity || !value;
	}

	getMenu () {
		const {
			difficulty,
			word,
		} = this.props;
		const {
			value,
		} = this.state;

		return (
			<ui.Dropdown
				basic
				compact
				button
				icon={(<ui.Icon
					size="small"
					fitted
					name="help"
				/>)}
				style={{
					margin: '0',
					padding: '.58928571em .58928571em',
				}}
			>
				<ui.Dropdown.Menu
					direction="left"
				>
					<ui.Dropdown.Item>
						Lettres: {value.length}/{word.strict.length}
					</ui.Dropdown.Item>
					{difficulty <= 2 && (
						<ui.Dropdown.Item>Canton: {word.canton}</ui.Dropdown.Item>
					)}
				</ui.Dropdown.Menu>
			</ui.Dropdown>
		);
	}

	render () {
		const {
			word,
		} = this.props;

		return (
			<ui.Input
				type="text"
				className="text word"
				error={!this.isValid()}
				onChange={this.onChangeValidateWord}
			>
				<input
					className={word.compact && 'compact'}
					style={{
						width: `calc(${word.strict.length}ch + ${word.compact ? '.2' : '.8'}em)`,
					}}
				/>
				{this.getMenu()}
			</ui.Input>
		);
	}
}
