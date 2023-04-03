/** @format */
import { component$, useResource$ } from '@builder.io/qwik';
import { Course, getCourses } from '~/helpers/get-courses';

export default component$(() => {
	/** With resumability */
	const resource = useResource$(async () => getCourses());
	/** The data to show is going to be SSR. So, it not be shown any "spinner" */

	return (
		<>
			{/** Spinner */}
			{resource.loading && <span>Loading...</span>}
			{/** To show the data "then" is needed */}
			{resource.value.then((items: Course[]) =>
				items.map((course: Course) => (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<h3>{course.description}</h3>
						<span>{course.category}</span>
					</div>
				))
			)}
		</>
	);
});
