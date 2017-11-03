import React from 'react';
import './App.css';
import * as r from 'react-router-dom';
import ROUTES from './config/routes';
import NavMenu from './components/nav/nav-menu';
console.log("ROUTES", ROUTES);
export default class App extends React.Component {
	render () {
		return (
			<div className="App">
				<NavMenu />
				<r.Switch>
					{ROUTES.map((route, index) => {
						const {
							path,
							routing
						} = route;
						const {
							component = null,
							...other
						} = routing;
						return component && (
							<r.Route
								key={index}
								path={path}
								component={component}
								exact
								{...other}
							/>
						);
					})}
					{/* <Route component={NotFound}/> */}
				</r.Switch>
			</div>
		);
	}
}
