export interface User {
	id: number
	name: string
	group: string
	username: string
	token: string
	isAdmin: boolean
}

export interface UserResponse {
	message: string
	user: User
}

export interface Error {
	property: string
	reason: string
}

export interface ErrorMessage {
	message: string
}

export interface ErrorResponse {
	message: string
	errors: Error[]
}

