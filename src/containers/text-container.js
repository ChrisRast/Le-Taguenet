import React from 'react';
import PropTypes from 'prop-types';
import TextComponent from './../components/text/text-component';
import wordsData from '../data/words';
import {
	difficulty,
	validation
} from '../data/labels';
import accents from 'remove-accents';
import * as ui from 'semantic-ui-react';
import OptionsComponent from './../components/text/options-component';

export default class TextContainer extends React.PureComponent {
	static childContextTypes = {
		validateWord: PropTypes.func
	}

	state = {
		strict: false,
		hint: null,
		difficulty: 1,
		words: {}
	}

	/**
	 * Invoked once, both on the client and server, immediately before the initial rendering occurs.
	 * @protected
	 * @method componentWillMount
	 * @return {void}
	 */
	componentWillMount () {
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
		let newWords = {};
		Object.keys(wordsData).forEach((key) => {
			const word = wordsData[key];
			newWords[key] = {
				...word,
				input: '',
				loose: key,
				validity: false
			};
		});
		console.log("words", newWords);
		this.setState({
			words: newWords
		});
	}

	getChildContext () {
		return {
			validateWord: this.validateWord.bind(this)
		};
	}

	validateWord (newInputValue, word) {
		const {
			strict
		} = this.state;
		const {
			input: oldInputValue,
			strict: strictLabel,
			validity: wordValidity
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
			words
		} = this.state;
		Object.keys(words).forEach((key) => {
			this.validateWord(words[key].input, words[key]);
		});
	}

	updateStateWordsValidity (key, validity, inputValue) {
		const {
			words
		} = this.state;
		const newWords = Object.assign({}, words);
		newWords[key] = {
			...newWords[key],
			input: inputValue,
			validity: Boolean(validity)
		};
		this.setState({
			words: newWords
		});
	}

	/**
	 * Tells if the whole text is valid
	 * False if at least one word is not valid
	 * @method    isValid
	 * @protected
	 * @return    {Boolean} True if all words have a validity at true.
	 */
	isValid () {
		const {
			words
		} = this.state;
		return Object.values(words).every((key) => {
			return words[key].validity;
		});
	}

	// Hints: display length, canton
	selectHint (hint) {

	}

	toggleStrict () {
		const {
			strict
		} = this.state;

		this.setState({
			strict: !strict
		});
	}

	getDifficultyOptions () {
		const {
			words
		} = this.state;
		const options = [];
		Object.keys(words).forEach((key) => {
			const {
				difficulty
			} = words[key];
			if (difficulty !== 0 && !options.includes(difficulty)) {
				options.push(difficulty);
			}
		});
		return options.sort().map((val) => {
			return {
				text: difficulty[val],
				value: val
			};
		});
	}

	getValidationOptions () {
		return Object.keys(validation).map((key) => {
			return {
				text: validation[key],
				value: key
			};
		});
	}
	// TODO
	// Hints:
	// Make word with sub menu to display:
	// - word,
	// - length,
	// - canton

	render () {
		const {
			strict,
			words,
			difficulty
		} = this.state;
		return (
			<ui.Container>
				<OptionsComponent
					strict={strict}
					strictOptions={this.getValidationOptions()}
					onStrictChange={this.toggleStrict.bind(this)}
					difficulty={difficulty}
					difficultyOptions={this.getDifficultyOptions()}
				/>
				<TextComponent
					strict={strict}
					words={words}
					difficulty={difficulty}
				/>
			</ui.Container>
		);
	}
}
