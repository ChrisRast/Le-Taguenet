import React from 'react';
import PropTypes from 'prop-types';
import WordComponent from './word-component';
import * as ui from 'semantic-ui-react';

export default class TextComponent extends React.PureComponent {
	/**
	 * Range of validators that can be used to make sure the received data is valid
	 * @public
	 * @type {Object}
	 */
	static propTypes = {
		strict: PropTypes.bool,
		difficulty: PropTypes.number,
		words: PropTypes.objectOf(
			PropTypes.shape({
				loose: PropTypes.string,
				canton: PropTypes.string,
				difficulty: PropTypes.number,
				strict: PropTypes.string,
				validity: PropTypes.bool
			})
		)
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		strict: false,
		words: {},
		difficulty: 0
	}

	wordIterator = null;

	wordsRef = {};

	/**
	 * Invoked once, both on the client and server, immediately before the initial rendering occurs.
	 * @protected
	 * @method componentWillMount
	 * @return {void}
	 */
	componentWillMount () {
		this.setWordIterator();
	}

	/**
	 * Invoked when a component is receiving new props. This method is not called for the initial render.
	 * @protected
	 * @method componentWillReceiveProps
	 * @param  {object}   nextProps  The next properties of the component
	 * @return {void}
	 */
	componentWillReceiveProps (nextProps) {
		this.setWordIterator();
	}

	setWordIterator () {
		const {
			words
		} = this.props;
		this.wordIterator = Object.keys(words)[Symbol.iterator]();
	}

	getNextWord () {
		const {
			value = ''
		} = this.wordIterator.next();
		const {
			words,
			strict
		} = this.props;
		if (value === '') {
			return null;
		}
		return (
			<WordComponent
				strict={strict}
				word={words[value]}
			/>
		);
	}

	render () {
		return (
			<ui.Container
				text
				textAlign="left"
				className="text space-bottom"
			>
				<p>
					Le Taguenet était un curieux bonhomme. Il était le {this.getNextWord()} né d'une famille de dix enfants. À l'école il n'était pas un {this.getNextWord()} mathématique. Et il n'avait {this.getNextWord()} dans sa poche.'
				</p>
				<p>
					Il regardait les gens de {this.getNextWord()} bouche {this.getNextWord()} des {this.getNextWord()} profondes barraient sont front bizarre, ce front encadré de magnifiques cheveux {this.getNextWord()}
				</p>
			</ui.Container>
		);
	}
}
