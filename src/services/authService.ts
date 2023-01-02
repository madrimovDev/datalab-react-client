import { AxiosError, AxiosResponse } from 'axios'
import api from '../api'

type AuthError = AuthError.Response | AuthError.ErrorMessage

const authService = {
	baseURL: '/auth',
	async login(): Promise<AxiosResponse<AuthResponse.User> | AxiosError<AuthError>> {
		try {
			const response = await api.post<AuthResponse.User>(`${this.baseURL}/login`)
			return response
		} catch (e) {
			const error = e as unknown as AxiosError<AuthError>
			return error
		}
	},
	async register(): Promise<AxiosResponse<AuthResponse.User> | AxiosError<AuthError>> {
		try {
			const response = await api.post(`${this.baseURL}/register`)
			return response
		} catch (e) {
			const error = e as unknown as AxiosError<AuthError>
			return error
		}
	}
}

export default authService

