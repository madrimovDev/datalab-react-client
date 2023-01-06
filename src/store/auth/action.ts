import { AxiosError } from 'axios'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
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

export const register = createAsyncThunk(
	'auth/register',
	async (
		{
			username,
			password,
			name,
			group
		}: {
			username: string
			password: string
			name: string
			group: string
		},
		{ rejectWithValue }
	) => {
		try {
			const res = await authService.register(username, password, name, group)
			return res
		} catch (e) {
			throw rejectWithValue(e)
		}
	}
)

export const logout = createAction('auth/logout')

