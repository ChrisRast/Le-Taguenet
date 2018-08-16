import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ROUTES from './config/routes';
import {
	Header,
	Footer,
} from './components/nav';
import NotFound from './components/not-found';
import NavContainer from './containers/nav-container';
import * as r from 'react-router-dom';
import * as ui from 'semantic-ui-react';

const NavMenuWithRouter = r.withRouter(NavContainer);

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
			<r.Route
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
					routes={ROUTES}
				/>
				<ui.Container
					className="content"
					text
				>
					<r.Switch>
						{ROUTES.map(this.renderRoute)}
						<r.Route component={NotFound}/>
					</r.Switch>
				</ui.Container>
				<Footer />
			</div>
		);
	}
}
