import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './App.css';

ReactDOM.render(
	(
		<BrowserRouter
		>
			<App />
		</BrowserRouter>
	),
	document.getElementById('root')
);
registerServiceWorker();
