import { AxiosResponse } from 'axios'
import { AnyAction, createReducer, AsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AuthError } from '../../services/authService'
import { User, UserResponse } from '../../services/types/type'
import { login, register } from './action'

type Status = 'pending' | 'rejected' | 'fulfilled' | 'default'

interface AuthState {
	user: User | undefined
	status: Status
	message: string | undefined
}

type FulfilledAction = PayloadAction<
	AxiosResponse<UserResponse, any>,
	string,
	{
		arg: void
		requestId: string
		requestStatus: 'fulfilled'
	},
	never
>

const isPending = (action: AnyAction): boolean => {
	return action.type.startsWith('auth/') && action.type.endsWith('/pending')
}

const isFulfilled = (action: AnyAction): boolean => {
	return action.type.startsWith('auth/') && action.type.endsWith('/fulfilled')
}

const isRejected = (action: AnyAction): boolean => {
	return action.type.startsWith('auth/') && action.type.endsWith('/rejected')
}

const initialState: AuthState = {
	message: undefined,
	status: 'default',
	user: undefined
}

const reducer = createReducer(initialState, (builder) => {
	builder.addMatcher(isFulfilled, (state, action: FulfilledAction) => {
		state.message = action.payload.data.message
		state.status = 'fulfilled'
		state.user = action.payload.data.user
	})
	builder.addMatcher(isPending, (state) => {
		state.status = 'pending'
		state.user = undefined
		state.message = undefined
	})
	builder.addMatcher(isRejected, (state, action: PayloadAction<any>) => {
		state.message = action.payload.message
		state.status = 'rejected'
		state.user = undefined
	})
})

export default reducer

