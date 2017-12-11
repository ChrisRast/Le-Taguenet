import Text from '../containers/text-container';
import Contact from '../containers/contact-container';
import About from '../containers/about-container';
import Home from '../containers/home-container';

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
			component: Text
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
