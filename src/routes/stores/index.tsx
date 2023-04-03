/** @format */
import { $, component$, useStore } from '@builder.io/qwik';
import { ContextParent } from '~/components/context/context-parent';

export default component$(() => {
	const messages = ['First message', 'Second message', 'Third message'];
	/**
	 * It is not a good idea to unstructure the object because the constants cannot be reassigned.
	 */
	const store = useStore({
		index: 0,
	});

	const showNextMessate = $(() => {
		if (store.index < messages.length - 1) store.index++;
	});

	return (
		<>
			<h1>Qwik Stores: </h1>
			<h2>{messages[store.index]}</h2>
			<button onClick$={showNextMessate}>Next Message</button>

			<ContextParent />
		</>
	);
});
