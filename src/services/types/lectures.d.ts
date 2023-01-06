declare namespace Lectures {
	export interface Lecture {
		id: number
		name: string
		description: string
	}

	export interface RootObject {
		message: string
		lectures: Lecture[]
	}
}

declare namespace LectureError {
	export interface Error {
		property: string
		reason: string
	}

	export interface RootObject {
		message: string
		errors: Error[]
	}
}

