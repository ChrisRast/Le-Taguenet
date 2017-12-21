import React from 'react';
import PropTypes from 'prop-types';
import TextComponent from './../components/text/text-component';
import wordsData from '../data/words';
import accents from 'remove-accents';
import * as ui from 'semantic-ui-react';
import OptionsComponent from './../components/text/options-component';

export default class MainComponent extends React.PureComponent {
	static childContextTypes = {
		validateWord: PropTypes.func
	}

	state = {
		strict: false,
		hint: null,
		difficulty: 0,
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

	initState () {
		let newWords = {};
		Object.keys(wordsData).forEach((key) => {
			const word = wordsData[key];
			newWords[key] = {
				...word,
				loose: key,
				validity: false
			};
		});
		this.setState({
			words: newWords
		});
	}

	getChildContext () {
		return {
			validateWord: this.validateWord.bind(this)
		};
	}

	validateWord (word, original) {
		const {
			strict,
			words
		} = this.state;
		const foundKey = Object.keys(words).find((key) => {
			return key === original;
		});
		const {
			strict: strictLabel
		} = words[foundKey] || {};
		let validity = false;

		if (strictLabel) {
			if (strict) {
				validity = word === strictLabel;
			} else {
				const normalizedWord = accents.remove(word).toUpperCase();
				const normalizedStrict = accents.remove(strictLabel).toUpperCase();

				validity = normalizedWord === normalizedStrict;
			}
		}
		this.updateStateValidity(foundKey, validity);

		return validity;
	}

	updateStateValidity (key, state) {
		const {
			words
		} = this.state;
		const newWords = Object.assign({}, words);
		newWords[key] = {
			...newWords[key],
			validity: Boolean(state)
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

	render () {
		const {
			strict,
			words
		} = this.state;

		return (
			<ui.Container>
				<OptionsComponent
					strict={strict}
					onStrictChange={this.toggleStrict.bind(this)}
				/>
				{/* difficulty and hints */}
				{/* <HintsComponent
					selectHint={this.selectHint.bind(this)}
				/> */}
				<TextComponent
					strict={strict}
					words={words}
				/>
			</ui.Container>
		);
	}
}
