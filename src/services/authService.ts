import { AxiosError, AxiosResponse } from 'axios'
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
	async register() {
		const response = await api.post(`${this.baseURL}/register`)
		return response
	}
}

export default authService

