import React from 'react';
import * as ui from 'semantic-ui-react';

export default function Footer (props) {
	return (
		<ui.Container
			textAlign="center"
		>
			<ui.Divider />
			<ui.List
				horizontal
			>
				<ui.List.Item
					icon="copyright"
					content={<a href="http://imchris.ch" target="blank">Christophe Rast</a>}
				/>
				<ui.List.Item
					icon="code"
					content={(
						<a href="https://github.com/ChrisRast/Le-Taguenet" target="blank">
							Code source
						</a>
					)}
				/>
			</ui.List>
		</ui.Container>
	);
}
