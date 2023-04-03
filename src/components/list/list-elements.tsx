/** @format */
import { component$ } from '@builder.io/qwik';

export const ListElement = component$(() => {
	const items = ['item1', 'item2', 'item3'];

	return (
		<ul>
			{items.map((item: string, index: number) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
});
