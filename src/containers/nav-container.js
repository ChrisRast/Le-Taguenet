import React from 'react';
import PropTypes from 'prop-types';
import * as ui from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
	/**
	 * Range of validators that can be used to make sure the received data is valid
	 * @public
	 * @type {Object}
	 */
	static propTypes = {
		location: PropTypes.object.isRequired,
		routes: PropTypes.arrayOf(PropTypes.shape({
			path: PropTypes.string,
			menu: PropTypes.shape({
				label: PropTypes.string,
			}),
			routing: PropTypes.shape({
				component: PropTypes.func,
			}),
		})),
	}

	/**
	 * Default values for properties
	 * @public
	 * @type {object}
	 */
	static defaultProps = {
		routes: [],
	}

	getRoutesNavLink () {
		const {
			routes,
			location,
		} = this.props;
		return routes.map((route, index) => {
			const {
				path,
				menu,
			} = route;
			const {
				label,
			} = menu;
			return (
				<ui.Menu.Item
					as={Link}
					key={index}
					to={path}
					active={location.pathname === path}
				>
					{label}
				</ui.Menu.Item>
			);
		});
	}
	render () {
		return (
			<ui.Menu
				pointing
				widths={this.props.routes.length}
				className="space-bottom"
			>
				{this.getRoutesNavLink()}
			</ui.Menu>
		);
	}
}
