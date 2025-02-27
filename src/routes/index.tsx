/** @format */
import { component$ } from '@builder.io/qwik';
import { ConditionalComponent } from '~/components/conditional/conditional';
import { EventHanlder } from '~/components/event-handler/event-handler';
import { HelloMessage } from '~/components/hello-message/hello-message';
import { InputComponent } from '~/components/input/input-component';
import { ListElement } from '~/components/list/list-elements';
import { BestWay } from '~/components/style-components/best-way';
import { ConditionalStylesComponent } from '~/components/style-components/conditional-styles';
import { InlineComponent } from '~/components/style-components/inline-component';
import { StyleComponent } from '~/components/style-components/style-component';

/**
 * export default is needed.
 */
export default component$((/**inputs*/) => {
	/** Qwik is SSR by default */
	console.log('This console.log is going to be seen in the server, not in the browser');

	return (
		<div
			/** Different like in React, Qwik is able to use the class word */
			class='container'
			/** Style components are allowed like in React */
			style={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<HelloMessage />

			<InputComponent
				message='Testing props'
				version={4}
			/>

			<InputComponent message='Testing props without version' />

			<EventHanlder />

			<ConditionalComponent show={true} />

			<ListElement />

			<StyleComponent />

			<InlineComponent />

			<BestWay />

			<ConditionalStylesComponent />
		</div>
	);
});
