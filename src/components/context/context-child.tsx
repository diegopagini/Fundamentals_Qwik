/** @format */
import { component$, useContext } from '@builder.io/qwik';

import { MessagesContext } from './context';

export const ContextChild = component$(() => {
	const { messages, index } = useContext(MessagesContext);

	return <div>{messages[index]}</div>;
});
