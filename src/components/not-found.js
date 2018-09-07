import React from 'react';
import * as ui from 'semantic-ui-react';

export default function NotFound () {
	return (
		<ui.Container>
			<h1>Page introuvable - 404 Not Found</h1>
			Il semblerait que vous ayiez essayé d'accéder à une page inconnue.
			<br />
			Utilisez la navigation ci-dessus pour retrouver votre chemin.
		</ui.Container>
	);
}
