/**
 * @format
 */
import { component$ } from '@builder.io/qwik';

/** export must be used allways */
export const HelloMessage = component$(() => {
	const hello = 'Hello ';
	const world = 'World!!!';
	/**The way to output variables is the same like in react. Because this is jsx */
	return <h1>{hello + world}</h1>;
});
