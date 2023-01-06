import { AxiosResponse } from 'axios'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { User, UserResponse } from '../../services/types/auth'
import { logout } from './action'
import { isFulfilled, isPending, isRejected } from './matcher'

type Status = 'pending' | 'rejected' | 'fulfilled' | 'default'

interface AuthState {
	user: User | undefined
	status: Status
	message: string | undefined
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

