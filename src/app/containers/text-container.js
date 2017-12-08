import React from 'react';
import PropTypes from 'prop-types';
import TextComponent from './../components/text/text-component';
import words from '../../data/words';
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
		validity: null
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
		let newValidity = {};
		Object.keys(words).forEach((key) => {
			newValidity[key] = false;
		});
		this.setState({
			validity: newValidity
		});
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
			validity
		} = this.state;
		let newValidty = Object.assign({}, validity);
		newValidty[key] = Boolean(state);
		this.setState({
			validity: newValidty
		});
	}

	isValid () {
		const {
			validity
		} = this.state;
		return !Object.values(validity).includes(false);
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
			strict
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
