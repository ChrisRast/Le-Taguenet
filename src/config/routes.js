import MainComponent from '../components/text/main-component';
import Contact from '../components/contact';
console.log("Contact", Contact);
export default [
	{
		path: '/',
		menu: {
			label: 'Home'
		},
		routing: {
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
		routing: {}
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
