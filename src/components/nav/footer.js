import React from 'react';
import * as ui from 'semantic-ui-react';

export default function Footer(props) {
	return (
		<ui.Container
			textAlign="center"
		>
			<ui.Divider />
			<ui.List
				horizontal
			>
				<ui.List.Item
				>
					<ui.List.Icon
						name="copyright"
						style={{
							marginRight: '.5rem',
						}}
					/>
					2018 - {new Date().getFullYear()}, Christophe Rast
				</ui.List.Item>
				<ui.List.Item
				>
					<ui.List.Icon
						name="code"
						style={{
							marginRight: '.5rem',
						}}
					/>
					<a
						href="https://github.com/ChrisRast/Le-Taguenet"
						target="_blank"
						rel="noopener external nofollow noreferrer">
						Code source
					</a>
				</ui.List.Item>
			</ui.List>
		</ui.Container>
	);
}
