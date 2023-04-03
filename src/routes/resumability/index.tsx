/** @format */
import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import { Course, getCourses } from '~/helpers/get-courses';

export default component$(() => {
	const store = useStore({
		reloadCounter: 0,
	});

	const resource = useResource$<Course[]>((ctx) => {
		/** To manually make the http request again */
		ctx.track(() => store.reloadCounter);
		/** The request is going to be linked to the counter. So, any time that property change is going to make the request again */
		return getCourses();
	});

	return (
		<>
			<button onClick$={() => store.reloadCounter++}>Reload courses</button>

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
