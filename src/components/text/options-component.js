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
		difficultyOptions: PropTypes.arrayOf(PropTypes.object)
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
		difficultyOptions: []
	}

	onCheckStrict () {
		const {
			onStrictChange
		} = this.props;
		if (typeof onStrictChange === 'function') {
			onStrictChange();
		}
	}

	/**
	 * Main render of the component
	 * @method render
	 * @protected
	 * @return {object} React DOM object
	 */
	render () {
		const {
			strict,
			strictOptions,
			difficulty,
			difficultyOptions
		} = this.props;

		return (
			<ui.Menu
			>
				<ui.Menu.Item
					header
				>
					Options&nbsp;:
				</ui.Menu.Item>
				<ui.Menu.Item>
					Orthographe&nbsp;:&nbsp;
					<ui.Dropdown
						inline
						compact
						defaultValue={strict.toString()}
						options={strictOptions}
					/>
				</ui.Menu.Item>
				<ui.Menu.Item>
					Difficulté&nbsp;:&nbsp;
					<ui.Dropdown
						inline
						compact
						defaultValue={difficulty}
						options={difficultyOptions}
					/>
				</ui.Menu.Item>
			</ui.Menu>
		);
	}
}
