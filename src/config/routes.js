import Text from '../containers/text-container';
// import Contact from '../containers/contact-container';
// import About from '../containers/about-container';
import Home from '../containers/home-container';

export const ROUTES = {
	home: {
		path: '/',
		menu: {
			label: 'Accueil',
		},
		routing: {
			component: Home,
		},
	},
	text: {
		path: '/texte',
		menu: {
			label: 'Le texte',
		},
		routing: {
			component: Text,
		},
	},
	// about: {
	// 	path: '/a-propos',
	// 	menu: {
	// 		label: 'À propos',
	// 	},
	// 	routing: {
	// 		component: About,
	// 	},
	// },
	// contact: {
	// 	path: '/contact',
	// 	menu: {
	// 		label: 'Contact',
	// 	},
	// 	routing: {
	// 		component: Contact,
	// 	},
	// },
};

export const ROUTES_VALUES = Object.values(ROUTES);
