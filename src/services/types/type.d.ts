declare namespace AuthResponse {
	export interface User {
		id: number
		name: string
		group: string
		username: string
		token: string
		isAdmin: boolean
	}

	export interface Response {
		message: string
		user: User
	}
}
declare namespace AuthError {
	export interface Error {
		property: string
		reason: string
	}

  export interface ErrorMessage {
    message: string
  }

	export interface Response {
		message: string
		errors: Error[]
	}
}

