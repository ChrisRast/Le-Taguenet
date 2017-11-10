import React from 'react';
import PropTypes from 'prop-types';
import TextComponent from './text-component';
import words from '../../data/words';

export default class MainComponent extends React.PureComponent {
	static childContextTypes = {
		validateWord: PropTypes.func
	}

	state = {
		strict: true,
		hint: null,
		difficulty: 0
	}

	getChildContext () {
		return {
			validateWord: this.validateWord.bind(this)
		};
	}

	validateWord (word, original) {
		const {
			strict
		} = this.state;

		const foundKey = Object.keys(words).find((key) => {
			return key === original;
		});
		const foundWord = foundKey ? words[foundKey] : {};
		if (strict) {
			const {
				strict: strictLabel
			} = foundWord;
			return word === strictLabel;
		} else {
			return false;
			// const normalizedValue = input.value.toLowerCase();
			//
		}
	}

	// Hints: display length, canton
	selectHint (hint) {

	}

	render () {
		return (
			<div>
				{/* header/chapeau */}
				{/* difficulty and hints */}
				{/* <HintsComponent
					selectHint={this.selectHint.bind(this)}
				/> */}
				<TextComponent
					words={words}
				/>
			</div>
		);
	}
}
