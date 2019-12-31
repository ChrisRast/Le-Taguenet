import React from 'react';
import {
	hydrate, render
} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
	BrowserRouter
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
	hydrate((
		<BrowserRouter
		>
			<App />
		</BrowserRouter>
	), rootElement);
}
else {
	render((
		<BrowserRouter
		>
			<App />
		</BrowserRouter>
	), rootElement);
}
registerServiceWorker();
