import MainComponent from '../components/text';
import Contact from '../components/contact';
import About from '../components/about';
import Home from '../components/home';

export default [
	{
		path: '/',
		menu: {
			label: 'Home'
		},
		routing: {
			component: Home
		}
	},
	{
		path: '/texte',
		menu: {
			label: 'Le texte'
		},
		routing: {
			component: MainComponent
		}
	},
	{
		path: '/a-propos',
		menu: {
			label: 'À propos'
		},
		routing: {
			component: About
		}
	},
	{
		path: '/contact',
		menu: {
			label: 'Contact'
		},
		routing: {
			component: Contact
		}
	}
];
