import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { isMatch } from '../matcher'
import { Status } from '../types'
import { getAllLectures } from './action'

interface LecturesState {
	message?: string
	lectures: Lectures.Lecture[]
	status: Status
}

const initialState: LecturesState = {
	message: undefined,
	status: 'default',
	lectures: []
}

const reducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllLectures.fulfilled, (state, action) => {
		state.message = action.payload.data.message
		state.status = 'fulfilled'
		state.lectures = action.payload.data.lectures
	})
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	builder.addMatcher(isMatch('lectures/', '/rejected'), (state, action: PayloadAction<any>) => {
		state.message = action.payload.message
		state.status = 'rejected'
	})
	builder.addMatcher(isMatch('lectures/', '/pending'), (state) => {
		state.status = 'pending'
	})
})

export default reducer

