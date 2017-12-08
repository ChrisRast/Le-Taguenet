import Text from '../app/containers/text-container';
import Contact from '../app/containers/contact-container';
import About from '../app/containers/about-container';
import Home from '../app/containers/home-container';

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
