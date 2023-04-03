/** @format */
import { component$, useContextProvider, useStore } from '@builder.io/qwik';

import { MessagesContext } from './context';
import { ContextChild } from './context-child';

export const ContextParent = component$(() => {
	const messages = ['First message', 'Second message', 'Third message'];

	const store = useStore({
		messages,
		index: 0,
	});

	useContextProvider(MessagesContext, store);

	return (
		<>
			<ContextChild />
			<button onClick$={() => store.index++}>Next Message</button>
		</>
	);
});
