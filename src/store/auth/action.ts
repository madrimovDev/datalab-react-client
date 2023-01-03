import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from '../../services'
import { AuthError } from '../../services/authService'

export const login = createAsyncThunk(
	'auth/login',
	async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
		try {
			const res = await authService.login(username, password)
			return res
		} catch (e) {
			const error = e as AxiosError<AuthError>
			throw rejectWithValue(error.response?.data)
		}
	}
)

export const register = createAsyncThunk('auth/register', async (_, { rejectWithValue }) => {
	try {
		const res = await authService.register()
		return res
	} catch (e) {
		throw rejectWithValue(e)
	}
})

