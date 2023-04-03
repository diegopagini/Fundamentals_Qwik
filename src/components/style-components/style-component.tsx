/** @format */
import { component$, useStyles$ } from '@builder.io/qwik';

import { Styles } from './styles';

export const StyleComponent = component$(() => {
	useStyles$(Styles);

	return (
		<div class='block'>
			<p class='block__text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi reprehenderit
				minima facere vero? Nam sapiente aliquid, blanditiis itaque dolorum sint veritatis quo quia
				ipsa similique tempore. Alias, officia atque.
			</p>
		</div>
	);
});
