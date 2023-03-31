/** @format */
import { $, component$ } from '@builder.io/qwik';

export const EventHanlder = component$(() => {
	/**
	 * functions must be serialized using "$" from qwik
	 */
	const sayHello = $(() => {
		alert('Hello world!');
	});

	return <button onClick$={sayHello}>Say Hello</button>;
});
