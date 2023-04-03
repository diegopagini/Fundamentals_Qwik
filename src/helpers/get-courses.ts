/** @format */

export interface Course {
	category: string;
	description: string;
	iconUrl: string;
	id: number;
	lessonsCount: number;
	longDescription: string;
	price: number;
	seqNo: number;
	url: string;
}

export const getCourses = async (): Promise<Course[]> => {
	return (await fetch('http://localhost:9000/api/courses')).json();
};
