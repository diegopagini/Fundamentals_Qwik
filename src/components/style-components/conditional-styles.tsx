/** @format */
import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './conditional-styles.css';

export const ConditionalStylesComponent = component$(() => {
	const items = [
		{
			name: 'test1',
			value: 1,
		},
		{
			name: 'test2',
			value: 2,
		},
		{
			name: 'test3',
			value: 3,
		},
		{
			name: 'test4',
			value: 4,
		},
		{
			name: 'test5',
			value: 5,
		},
		{
			name: 'test6',
			value: 6,
		},
	];

	useStylesScoped$(styles);

	return (
		<ul>
			{items.map((item, index) => (
				<li
					key={index}
					class={[item.value > 1 && item.value < 6 ? 'highlighted' : '']}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
});
