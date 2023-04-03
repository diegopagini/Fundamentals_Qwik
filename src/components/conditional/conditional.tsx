/** @format */
import { component$ } from '@builder.io/qwik';

interface Props {
	show: boolean;
}

export const ConditionalComponent = component$<Props>(({ show }) => {
	return <>{show && <h1>I'm visible</h1>}</>;
});
