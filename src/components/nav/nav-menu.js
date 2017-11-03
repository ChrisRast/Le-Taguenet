import React from 'react';
import * as r from 'react-router-dom';
import ROUTES from '../../config/routes';

export default class NavMenu extends React.PureComponent {
	getRoutesNavLink () {
		return ROUTES.map((route, index) => {
			const {
				path,
				menu
			} = route;
			const {
				label,
				other
			} = menu;
			return (
				<r.NavLink
					key={index}
					to={path}
					exact
					activeClassName="active"
					{...other}
				>
					{label}
				</r.NavLink>
			);
		});
	}
	render () {
		return (
			<div>
				{this.getRoutesNavLink()}
			</div>
		);
	}
}
