/** @format */
import { component$ } from '@builder.io/qwik';

interface Props {
	message: string;
	version?: number;
}

export const InputComponent = component$<Props>(({ message, version }) => {
	return (
		<div>
			<h2>{message}</h2>
			{/* for optional parameters */}
			{version && <span>{version}</span>}
		</div>
	);
});
