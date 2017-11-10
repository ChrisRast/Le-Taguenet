import React from 'react';
import PropTypes from 'prop-types';
import * as ui from 'semantic-ui-react';

export default class NavMenu extends React.Component {
	/**
	 * Range of validators that can be used to make sure the received data is valid
	 * @public
	 * @type {Object}
	 */
	static propTypes = {
		routes: PropTypes.arrayOf(PropTypes.shape({
			path: PropTypes.string,
			menu: PropTypes.shape({
				label: PropTypes.string
			}),
			routing: PropTypes.shape({
				component: PropTypes.func
			})
		}))
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		routes: []
	}

	/**
	 * Go to the specified path
	 * @method    goTo
	 * @protected
	 * @param     {String} path Path to add to history
	 * @return    {void}
	 */
	goTo (path) {
		const {
			history
		} = this.props;
		history.push(path);
	}

	getRoutesNavLink () {
		const {
			routes
		} = this.props;
		return routes.map((route, index) => {
			const {
				path,
				menu
			} = route;
			const {
				label
			} = menu;
			return (
				<ui.Menu.Item
					key={index}
					onClick={this.goTo.bind(this, path)}
				>
					{label}
				</ui.Menu.Item>
			);
		});
	}
	render () {
		return (
			<nav>
				<ui.Menu
					widths={this.props.routes.length}
				>
					{this.getRoutesNavLink()}
				</ui.Menu>
			</nav>
		);
	}
}
