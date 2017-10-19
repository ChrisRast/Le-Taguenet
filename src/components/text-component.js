import React from 'react';
import PropTypes from 'prop-types';
import WordComponent from './word-component';

export default class TextComponent extends React.Component {
	static propTypes = {
		words: PropTypes.object
	}

	static defaultProps = {
		words: []
	}

	wordIterator = null;

	componentWillMount () {
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
		return value;
	}

	render () {
		return (
			<div>
				<p>
					Le Taguenet était un curieux bonhomme. Il était le <WordComponent word={this.getNextWord()} /> né d'une famille de dix enfants. À l'école il n'était pas un <WordComponent word={this.getNextWord()} /> mathématique. Et il n'avait <WordComponent word={this.getNextWord()} /> dans sa poche.'
				</p>
				<p>
					Il regardait les gens de <WordComponent word={this.getNextWord()} /> bouche <WordComponent word={this.getNextWord()} />; des <WordComponent word={this.getNextWord()} /> profondes barraient sont front bizarre, ce front encadré de magnifiques cheveux <WordComponent word={this.getNextWord()} />.'
				</p>
			</div>
		);
	}
}
