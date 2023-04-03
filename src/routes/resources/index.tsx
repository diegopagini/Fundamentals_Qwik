/** @format */
import { $, component$, useStore } from '@builder.io/qwik';
import { Course, getCourses } from '~/helpers/get-courses';

export default component$(() => {
	const store = useStore<{ courses: Course[] }>({
		courses: [],
	});

	/** With not resumability */
	const getData = $(async () => {
		const courses = await getCourses();
		store.courses = courses;
	});

	return (
		<>
			{/** To get the data */}
			<button onClick$={getData}>Get Data</button>

			{/** To show the data */}
			{store.courses.map((item) => (
				<div
					style={{
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<h3>{item.description}</h3>
					<span>{item.category}</span>
				</div>
			))}
		</>
	);
});
