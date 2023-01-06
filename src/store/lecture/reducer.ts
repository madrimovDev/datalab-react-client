import { getById } from './action'
import { Status } from './../types.d'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { isMatch } from '../matcher'

interface LectureState {
	message?: string
	status: Status
	lecture?: Lectures.Lecture
}

const initialState: LectureState = {
	status: 'default'
}

const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getById.fulfilled, (state, action) => {
		state.message = action.payload.data.message
		state.status = 'fulfilled'
		state.lecture = action.payload.data.lecture
	})
	builder.addMatcher(isMatch('lecture/', '/pending'), (state) => {
		state.status = 'pending'
	})
	builder.addMatcher(isMatch('lecture/', '/rejected'), (state, action: PayloadAction<any>) => {
		state.status = 'rejected'
		state.message = action.payload.message
	})
})

export default reducer

