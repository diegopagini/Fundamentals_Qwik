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

---

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

---

## Conditional render

### conditional.tsx

```tsx
import { component$ } from '@builder.io/qwik';

interface Props {
	show: boolean;
}

export const ConditionalComponent = component$<Props>(({ show }) => {
	return <>{show && <h1>I'm visible</h1>}</>;
});
```

### index.tsx

```tsx
import { component$ } from '@builder.io/qwik';
import { ConditionalComponent } from '~/components/conditional/conditional';

export default component$(() => {
	return (
		<div>
			<ConditionalComponent show={true} />
		</div>
	);
});
```

---

## Loops

### list-elements.tsx

```tsx
import { component$ } from '@builder.io/qwik';

export const ListElement = component$(() => {
	const items = ['item1', 'item2', 'item3'];

	return (
		<ul>
			{items.map((item: string, index: number) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
});
```

---

## Style components

### style-component.tsx with useStyles$()

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';

import { BlockComponent } from './styles';

export const StyleComponent = component$(() => {
	useStyles$(BlockComponent);

	return (
		<div class='block'>
			<p class='block__text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi reprehenderit
				minima facere vero? Nam sapiente aliquid, blanditiis itaque dolorum sint veritatis quo quia
				ipsa similique tempore. Alias, officia atque.
			</p>
		</div>
	);
});
```

### or

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';

import styles from './styles.css';

export const StyleComponent = component$(() => {
	useStyles$(styles);

	return (
		<div class='block'>
			<p class='block__text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi reprehenderit
				minima facere vero? Nam sapiente aliquid, blanditiis itaque dolorum sint veritatis quo quia
				ipsa similique tempore. Alias, officia atque.
			</p>
		</div>
	);
});
```

### styles.tsx

```tsx
export const BlockComponent = `
.block {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.block__text {
  font-size: 1.5rem;
}`;
```

### or

### styles.css

```css
.block {
	align-items: center;
	display: flex;
	justify-content: center;
	text-align: center;
}

.block__text {
	color: blue;
	font-size: 1.5rem;
}
```

### inline-component.tsx

```tsx
import { component$ } from '@builder.io/qwik';

export const InlineComponent = component$(() => {
	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<p
				style={{
					color: 'red',
					fontSize: '1.5rem',
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi reprehenderit
				minima facere vero? Nam sapiente aliquid, blanditiis itaque dolorum sint veritatis quo quia
				ipsa similique tempore. Alias, officia atque.
			</p>
		</div>
	);
});
```

## useStylesScoped$()

```tsx
import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { Styles } from './styles';

export const BestWay = component$(() => {
	useStylesScoped$(Styles);

	return (
		<div class='block'>
			<p class='block__text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi reprehenderit
				minima facere vero? Nam sapiente aliquid, blanditiis itaque dolorum sint veritatis quo quia
				ipsa similique tempore. Alias, officia atque.
			</p>
		</div>
	);
});
```
