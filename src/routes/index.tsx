/** @format */
import { component$ } from '@builder.io/qwik';

/**
 * export default is needed.
 */
export default component$((/**inputs*/) => {
	/** Qwik is SSR by default */
	console.log('This console.log is going to be seen in the server, not in the browser');

	return <h1>Hello World!</h1>;
});
