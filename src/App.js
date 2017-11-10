import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import * as r from 'react-router-dom';
import ROUTES from './config/routes';
import {
	NavMenu,
	NotFound
} from './components/nav';

const NavMenuWithRouter = r.withRouter(NavMenu);

export default class App extends React.Component {
	render () {
		return (
			<div className="App">
				<NavMenuWithRouter
					routes={ROUTES}
				/>
				<div
					className="content"
				>

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
						<r.Route component={NotFound}/>
					</r.Switch>
				</div>
			</div>
		);
	}
}
