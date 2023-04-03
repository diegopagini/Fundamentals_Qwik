/** @format */
import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { Course, getCourses } from '~/helpers/get-courses';

export default component$(() => {
	/** With resumability */
	const resource = useResource$(async () => getCourses());
	/** The data to show is going to be SSR. So, it not be shown any "spinner" */

	return (
		<>
			{/** Resource is a tag from Qwik prepared for http requests */}
			<Resource
				value={resource}
				onPending={() => <span>Loading...</span>}
				onRejected={() => <span>Error...</span>}
				onResolved={(courses: Course[]) => (
					<>
						{courses.map((course: Course) => (
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
						))}
					</>
				)}
			/>
		</>
	);
});
