import React from 'react';
import * as r from 'react-router-dom';
import * as ui from 'semantic-ui-react';
import { ROUTES } from '../config/routes';

export default class Home extends React.PureComponent {
	render () {
		return (
			<ui.Container
				text
			>
				<ui.Header>
					Bienvenus sur Le Taguenet !
				</ui.Header>
				<p>
					Ce site a été dévelopé pour vous permettre de compléter le texte lacunaire homonyme à l'ère numérique.
				</p>
				<p>
					Pour essayer de trouver tous les mots, rendez-vous sur <r.Link to={ROUTES['text'].path}>le texte</r.Link>.
				</p>
				<p>
					C'est également un exercice personnel d'expérimentation de différentes technologies de dévelopment web {/* eslint-disable-line*/}
					<a
						href="https://fr.wikipedia.org/wiki/D%C3%A9veloppement_web_frontal"
						target="_blank"
						rel="noopener external nofollow noreferrer"
					>
						front-end
					</a>
					.
				</p>
			</ui.Container>
		);
	}
}
