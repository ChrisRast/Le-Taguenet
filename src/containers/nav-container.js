import React from 'react';
import PropTypes from 'prop-types';
import * as ui from 'semantic-ui-react';
import {
	Link
} from 'react-router-dom';

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

	/**
	 * Default state of the component
	 * @protected
	 * @type {Object}
	 * @property {[type]} name desc
	 */
	state = {
		showMenu: false,
	};

	/**
	 * Should it show the main menu
	 * @param {Boolean}
	 */
	showMenu = false;

	/**
	 * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
	 * @protected
	 * @method componentDidMount
	 * @return {void}
	 */
	componentDidMount() {
		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({ // Force re-render
			showMenu: true,
		});
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
					key={path}
					to={path}
					active={location.pathname === path}
				>
					{label}
				</ui.Menu.Item>
			);
		});
	}
	render () {
		const {
			showMenu,
		} = this.state;

		return (
			<ui.Menu
				pointing
				widths={this.props.routes.length}
				className="space-bottom"
			>
				{showMenu && this.getRoutesNavLink()}
			</ui.Menu>
		);
	}
}
