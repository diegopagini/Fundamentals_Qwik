/** @format */
import { $, component$, PropFunction } from '@builder.io/qwik';

interface Props {
	onShowMessage?: PropFunction<(message: string) => void>;
}

export const EventHanlder = component$<Props>(() => {
	/**
	 * functions must be serialized using "$" from qwik
	 */
	const sayHello = $(() => {
		alert('Hello world!');
	});

	return <button onClick$={sayHello}>Say Hello</button>;
});
