import React from 'react';
import * as ui from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class OptionsComponent extends React.PureComponent {
	/**
	 * Range of validators that can be used to make sure the received data is valid
	 * @public
	 * @type {Object}
	 */
	static propTypes = {
		strict: PropTypes.bool,
		strictOptions: PropTypes.arrayOf(PropTypes.object),
		onStrictChange: PropTypes.func,
		difficulty: PropTypes.number,
		difficultyOptions: PropTypes.arrayOf(PropTypes.object),
		onDifficultyChange: PropTypes.func,
		total: PropTypes.number,
		valid: PropTypes.number,
		sticked: PropTypes.bool,
		onStickyChange: PropTypes.func,
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		strict: false,
		strictOptions: [],
		onStrictChange: null,
		difficulty: 0,
		difficultyOptions: [],
		onDifficultyChange: null,
		total: 0,
		valid: 0,
		sticked: true,
		onStickyChange: null,
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

		this.onChangeStrict = this.onChangeStrict.bind(this);
		this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
	}

	onChangeStrict () {
		const {
			onStrictChange,
		} = this.props;
		if (typeof onStrictChange === 'function') {
			onStrictChange();
		}
	}

	onChangeDifficulty (event, { value }) {
		const {
			onDifficultyChange,
		} = this.props;
		if (typeof onDifficultyChange === 'function') {
			onDifficultyChange(value);
		}
	}

	getOrthographMenuItem () {
		const {
			strict,
			strictOptions,
		} = this.props;

		return (
			<ui.Menu.Item>
				Orthographe&nbsp;:&nbsp;
				<ui.Dropdown
					inline
					compact
					floating
					onChange={this.onChangeStrict}
					value={strict.toString()}
					options={strictOptions}
				/>
			</ui.Menu.Item>
		);
	}

	getDifficultyMenuItem () {
		const {
			difficulty,
			difficultyOptions,
		} = this.props;

		return (
			<ui.Menu.Item>
				Aide&nbsp;:&nbsp;
				<ui.Dropdown
					inline
					compact
					floating
					onChange={this.onChangeDifficulty}
					value={difficulty}
					options={difficultyOptions}
				/>
			</ui.Menu.Item>
		);
	}

	/**
	 * Main render of the component
	 * @method render
	 * @protected
	 * @return {object} React DOM object
	 */
	render () {
		const {
			total,
			valid,
			sticked,
			onStickyChange,
		} = this.props;

		return (
			<ui.Container
				text
				className="space-bottom"
			>
				<ui.Menu
					stackable
				>
					<ui.Menu.Item
						header
					>
						<ui.Icon name="options" />
						Paramètres&nbsp;:
					</ui.Menu.Item>
					{this.getOrthographMenuItem()}
					{this.getDifficultyMenuItem()}
					<ui.Menu.Menu
						position="right"
					>
						<ui.Menu.Item>
							Valides: {valid}/{total}
						</ui.Menu.Item>
						<ui.Menu.Item
							position="right"
							onClick={onStickyChange}
							icon={(
								<ui.Icon
									name="pin"
									title={sticked ? 'Attacher les options en haut' : 'Détacher les options'}
									className={sticked ? 'rotate-45' : ''}
								/>
							)}
						/>
					</ui.Menu.Menu>
				</ui.Menu>
			</ui.Container>
		);
	}
}
