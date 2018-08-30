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
				validity: PropTypes.bool,
			})
		),
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		strict: false,
		words: {},
		difficulty: 0,
	}

	static getDerivedStateFromProps (props) {
		return TextComponent.getWordIterator(props);
	}

	static getWordIterator (props) {
		const {
			words,
		} = props;
		return {
			wordIterator: Object.keys(words)[Symbol.iterator](),
		};
	}

	/**
	 * Default state of the component
	 * @protected
	 * @type {Object}
	 * @property {[type]} name desc
	 */
	state = {
		wordIterator: null,
	};

	wordsRef = {};

	/**
	 * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
	 * @protected
	 * @method componentDidMount
	 * @return {void}
	 */
	componentDidMount () {
		this.setState(TextComponent.getWordIterator(this.props));
	}

	getNextWord () {
		const {
			value = '',
		} = this.state.wordIterator.next();
		const {
			words,
			strict,
			difficulty,
		} = this.props;
		if (value === '') {
			return null;
		}
		const word = words[value];
		if (word.difficulty > difficulty) {
			return word.fallback;
		} else {
			return (
				<WordComponent
					difficulty={difficulty}
					strict={strict}
					word={word}
				/>
			);
		}
	}

	render () {
		return this.state.wordIterator && (
			<ui.Container
				text
				textAlign="left"
				className="text space-bottom"
			>
				<div>
					Le Taguenet était un curieux bonhomme. Il était le {this.getNextWord()} né d'une famille de dix enfants. À l'école il n'était pas un {this.getNextWord()} mathématique. Et il n'avait {this.getNextWord()} dans sa poche.
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					Il regardait les gens de {this.getNextWord()}, bouche {this.getNextWord()}, des {this.getNextWord()} profondes barrant son front bizarre, ce front encadré de magnifiques cheveux {this.getNextWord()}.
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					Il vivait dans une mansarde, {this.getNextWord()} de bains, {this.getNextWord()} du monde et des méchants. Le soir il allumait une petite {this.getNextWord()}, dont la {this.getNextWord()} lui donnait bien peu de lumière. Même avec celle-ci il {this.getNextWord()} à lire.
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					Il était si {this.getNextWord()} qu'on pouvait croire qu'il ne se {this.getNextWord()} jamais. La couche de crasse était si {this.getNextWord()} que mille {this.getNextWord()} d'eau bouillante n'auraient pu la détacher de la {this.getNextWord()} mains. Il sentait le beurre {this.getNextWord()} et était sec comme un {this.getNextWord()}. Son régal était l'omelette aux l{this.getNextWord()} accompagnée de {this.getNextWord()}.
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					Il travaillait fort peu. C'était ce qu'on appelle un bras {this.getNextWord()}. On l'accusait de vider {this.getNextWord()} des églises du district. {this.getNextWord()} curieux, il conservait pieusement un tableau représentant Napoléon {this.getNextWord()} {this.getNextWord()} de Sainte-Hélène. Le Taguenet était souvent en {this.getNextWord()} aux méchancetés des garçons du village.
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					C'était la veille de la {this.getNextWord()} et il neigeait. L'{this.getNextWord()} je vous parle était très rigoureux. Le long des canaux, l{this.getNextWord()} n'étaient pas nombreux. {this.getNextWord()} traditionnel de rassemblement du village était {this.getNextWord()} qui longe la rivière, non pas à l'ouest mais à {this.getNextWord()} du cours d'eau.
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					Ce soir-là, les jeunes remontaient la {this.getNextWord()} principale en chantant à tue-tête : "{this.getNextWord()} a point comme nous". Ils n'arrêtaient pas de se chamailler {this.getNextWord()} les autres quand soudain l'un d'eux ne put résister à la tenta{this.getNextWord()} d'aller embêter le Taguenet. Alors que le vent se levait, un des plus jeune ironisa, "Quel {this.getNextWord()} il fait !"
					- Si tu manques de {this.getNextWord()}, reste à la maison, répliqua le chef. A ton âge on {this.getNextWord()} de la bise !
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					La bande a{this.getNextWord()} au moment où le Taguenet sortait de sa maison. Aussitôt ils entourèrent le vieux bougre. "Vends-moi ton chapeau. Il fait froid, {this.getNextWord()} prix" rigola le chef. "Viens le prendre, jeune {this.getNextWord()}, répliqua le Taguenet. Et ce fut la bagarre. Mais soudain, le Taguenet s'affaissa. "Oh, {this.getNextWord()}, gémit-il en se tenant le bas du dos, je crois que j'ai le {this.getNextWord()} brisé, bande de m{this.getNextWord()} !
				</div>
				<ui.Divider
					hidden
				/>
				<div>
					Quelques jours plus tard, et malgré les meilleurs soins, le Taguenet était porté en {this.getNextWord()}. Il fut enterré dans le cimetière derrière {this.getNextWord()} non loin du village. Quant aux galopins, ils ont é{this.getNextWord()} de 6 mois d'arrêts avec sursis.
				</div>
			</ui.Container>
		);
	}
}
