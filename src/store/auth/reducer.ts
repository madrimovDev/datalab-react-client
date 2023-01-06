import { AxiosResponse } from 'axios'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { User, UserResponse } from '../../services/types/auth'
import { logout } from './action'
import { isFulfilled, isPending, isRejected } from './matcher'
import { Status } from '../types'


interface AuthState {
	user?: User
	status: Status
	message?: string
}

type FulfilledAction = PayloadAction<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	AxiosResponse<UserResponse, any>,
	string,
	{
		arg: void
		requestId: string
		requestStatus: 'fulfilled'
	},
	never
>

const initialState: AuthState = {
	message: undefined,
	status: 'default',
	user: undefined
}

const reducer = createReducer(initialState, (builder) => {
	builder.addCase(logout, (state) => {
		state.message = undefined
		state.status = 'default'
		state.user = undefined
		localStorage.clear()
	})
	builder.addMatcher(isFulfilled, (state, action: FulfilledAction) => {
		state.message = action.payload.data.message
		state.status = 'fulfilled'
		state.user = action.payload.data.user
		localStorage.setItem('userToken', action.payload.data.user.token)
	})
	builder.addMatcher(isPending, (state) => {
		state.status = 'pending'
		state.user = undefined
		state.message = undefined
	})
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	builder.addMatcher(isRejected, (state, action: PayloadAction<any>) => {
		state.message = action.payload.message
		state.status = 'rejected'
		state.user = undefined
	})
})

export default reducer

