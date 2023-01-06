import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../types'
import { getAllLectures } from './action'
import { isPending, isRejected } from './matcher'

interface LectureState {
	message?: string
	lectures: Lectures.Lecture[]
	status: Status
}

const initialState: LectureState = {
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
	builder.addMatcher(isRejected, (state, action: PayloadAction<any>) => {
		state.message = action.payload.message
		state.status = 'rejected'
	})
	builder.addMatcher(isPending, (state) => {
		state.status = 'pending'
	})
})

export default reducer

