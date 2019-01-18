import React from 'react';
import PropTypes from 'prop-types';
import TextComponent from './../components/text/text-component';
import wordsData from '../data/words';
import * as labels from '../data/labels';
import accents from 'remove-accents';
import * as ui from 'semantic-ui-react';
import OptionsComponent from './../components/text/options-component';
import * as params from '../config/params';

export default class TextContainer extends React.PureComponent {
	static childContextTypes = {
		validateWord: PropTypes.func,
	}

	/**
	 * Default state of the component
	 * @protected
	 * @type {Object}
	 */
	state = {
		strict: false,
		difficulty: 0,
		words: {},
	}

	/**
	 * Class constructor
	 * @public
	 * @constructor
	 * @param {Object} props Component properties
	 * @return {void}
	 */
	constructor (props) {
		super(props);

		this.toggleStrict = this.toggleStrict.bind(this);
		this.changeDifficulty = this.changeDifficulty.bind(this);
	}

	/**
	 * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
	 * @protected
	 * @method componentDidMount
	 * @return {void}
	 */
	componentDidMount () {
		this.initState();
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
		this.validateAllWords();
	}

	initState () {
		const {
			strict,
			difficulty,
		} = params;
		let newWords = {};
		Object.keys(wordsData).forEach((key) => {
			const word = wordsData[key];
			newWords[key] = {
				...word,
				input: '',
				loose: key,
				validity: false,
			};
		});
		this.setState({
			strict,
			difficulty,
			words: newWords,
		});
	}

	getChildContext () {
		return {
			validateWord: this.validateWord.bind(this),
		};
	}

	validateWord (newInputValue, word) {
		const {
			strict,
		} = this.state;
		const {
			input: oldInputValue,
			strict: strictLabel,
			validity: wordValidity,
		} = word;
		let newValidity = false;

		if (strictLabel) {
			if (strict) {
				newValidity = newInputValue === strictLabel;
			} else {
				const normalizedWord = accents.remove(newInputValue).toUpperCase();
				const normalizedStrict = accents.remove(strictLabel).toUpperCase();

				newValidity = normalizedWord === normalizedStrict;
			}
		}
		if (newValidity !== wordValidity || oldInputValue !== newInputValue) {
			this.updateStateWordsValidity(word.loose, newValidity, newInputValue);
		}

		return newValidity;
	}

	validateAllWords () {
		const {
			words,
		} = this.state;
		Object.keys(words).forEach((key) => {
			this.validateWord(words[key].input, words[key]);
		});
	}

	updateStateWordsValidity (key, validity, inputValue) {
		const {
			words,
		} = this.state;
		const newWords = Object.assign({}, words);
		newWords[key] = {
			...newWords[key],
			input: inputValue,
			validity: Boolean(validity),
		};
		this.setState({
			words: newWords,
		});
	}

	/**
	 * Tells how many words are valid
	 * @method    countValid
	 * @protected
	 * @return    {Number} True if all words have a validity at true.
	 */
	countValid () {
		const {
			words,
		} = this.state;
		return (Object.values(words).filter((word) => {
			return word.validity;
		}) || []).length;
	}

	countTotalWords (words = this.state.words) {
		return Object.values(words).length;
	}

	toggleStrict () {
		const {
			strict,
		} = this.state;

		this.setState({
			strict: !strict,
		});
	}

	changeDifficulty (value) {
		const {
			difficulty,
		} = this.state;
		if (difficulty !== value) {
			this.setState({
				difficulty: value,
			});
		}
	}

	getDifficultyOptions () {
		return Object.keys(labels.difficulty).map((key) => {
			return {
				text: labels.difficulty[key],
				value: parseInt(key, 10),
			};
		});
	}

	getValidationOptions () {
		return Object.keys(labels.validation).map((key) => {
			return {
				text: labels.validation[key],
				value: key,
			};
		});
	}

	render () {
		const {
			strict,
			words,
			difficulty,
		} = this.state;
		return (
			<React.Fragment>
				<OptionsComponent
					strict={strict}
					strictOptions={this.getValidationOptions()}
					onStrictChange={this.toggleStrict}
					difficulty={difficulty}
					difficultyOptions={this.getDifficultyOptions()}
					onDifficultyChange={this.changeDifficulty}
					total={this.countTotalWords()}
					valid={this.countValid()}
				/>
				<TextComponent
					strict={strict}
					words={words}
					difficulty={difficulty}
				/>
			</React.Fragment>
		);
	}
}
