/** @format */
import { component$ } from '@builder.io/qwik';

export const InlineComponent = component$(() => {
	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<p
				style={{
					color: 'red',
					fontSize: '1.5rem',
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi reprehenderit
				minima facere vero? Nam sapiente aliquid, blanditiis itaque dolorum sint veritatis quo quia
				ipsa similique tempore. Alias, officia atque.
			</p>
		</div>
	);
});
