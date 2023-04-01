<!-- @format -->

## Qwik For Beginners

---

## Components

### input-component.tsx

```tsx
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
```

### index.tsx

```tsx
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
			}}
		>
			<InputComponent
				message='Testing props'
				version={4}
			/>

			<InputComponent message='Testing props without version' />
		</div>
	);
});
```

### router components

```tsx
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
		</div>
	);
});
```

## Event hanlder

### inline

```tsx
import { component$ } from '@builder.io/qwik';

export const EventHanlder = component$(() => {
	return <button onClick$={() => alert('Hello World!')}>Say Hello</button>;
});
```

### reference

```tsx
import { $, component$ } from '@builder.io/qwik';

export const EventHanlder = component$(() => {
	/**
	 * functions must be serialized using "$" from qwik
	 */
	const sayHello = $(() => {
		alert('Hello world!');
	});

	return <button onClick$={() => sayHello()}>Say Hello</button>;
});
```

### by prop

### event-handler.tsx

```tsx
import { component$, PropFunction } from '@builder.io/qwik';

interface Props {
	message: string;
	onShowMessage: PropFunction<(message: string) => void>;
}

export const EventHanlder = component$(({ message, onShowMessage }: Props) => {
	return (
		<div>
			<button onClick$={() => onShowMessage(message)}>Show Message</button>;
		</div>
	);
});
```

### index.tsx

```tsx
import { $, component$ } from '@builder.io/qwik';
import { EventHanlder } from '~/components/event-handler/event-handler';

export default component$(() => {
	const showMessage = $((message: string) => alert(message));

	return (
		<div>
			<EventHanlder
				message='Hello World!'
				onShowMessage={showMessage}
			/>
		</div>
	);
});
```
