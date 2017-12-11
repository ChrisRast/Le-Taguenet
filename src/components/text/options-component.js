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
		onStrictChange: PropTypes.func
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		strict: false,
		onStrictChange: null
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
			strict
		} = this.props;

		return (
			<ui.Container>
				<ui.Header
					as="h2"
				>
					Options&nbsp;:
				</ui.Header>
				<ui.Checkbox
					label="Validation stricte"
					onChange={this.onCheckStrict.bind(this)}
					checked={strict}
				/>
			</ui.Container>
		);
	}
}
