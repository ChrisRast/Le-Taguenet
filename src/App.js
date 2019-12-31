import React from 'react';
import {
	ROUTES_VALUES
} from './config/routes';
import {
	Header,
	Footer
} from './components/nav';
import NotFound from './components/not-found';
import NavContainer from './containers/nav-container';
import {
	withRouter,
	Route,
	Switch
} from 'react-router-dom';
import './App.css';

const NavMenuWithRouter = withRouter(NavContainer);

export default class App extends React.Component {
	renderRoute (route, index) {
		const {
			path,
			routing,
		} = route;
		const {
			component = null,
			...other
		} = routing;

		return component && (
			<Route
				key={index}
				path={path}
				component={component}
				exact
				{...other}
			/>
		);
	}

	render () {
		return (
			<div className="App">
				<Header />
				<NavMenuWithRouter
					routes={ROUTES_VALUES}
				/>
				<Switch>
					{ROUTES_VALUES.map(this.renderRoute)}
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		);
	}
}
