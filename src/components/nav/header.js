import React from 'react';
import * as ui from 'semantic-ui-react';

export default function Header (props) {
	return (
		<ui.Header
			textAlign="center"
			as="h1"
			className="space-bottom"
			size="huge"
		>
			<ui.Header.Content
				className="ui text"
			>
				Le Taguenet
			</ui.Header.Content>
			<ui.Header.Subheader>
				Le Taguenet est un texte lacunaire à remplir en utilisant les villes et villages de Suisse romande.<br />Adapté d'un texte lacunaire de communes vaudoises, celui-ci se veut plus généraliste.
			</ui.Header.Subheader>
		</ui.Header>
	);
}
