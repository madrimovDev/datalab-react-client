import api from '../api'
import { ErrorMessage, UserResponse, ErrorResponse } from './types/type'

export type AuthError = ErrorResponse | ErrorMessage

const authService = {
	baseURL: '/auth',
	async login(username: string, password: string) {
		const response = await api.post<UserResponse>(`${this.baseURL}/login`, {
			username,
			password
		})
		return response
	},
	async register(username: string, password: string, name: string, group: string) {
		const response = await api.post(`${this.baseURL}/register`, {
			username,
			password,
			name,
			group
		})
		return response
	}
}

export default authService

