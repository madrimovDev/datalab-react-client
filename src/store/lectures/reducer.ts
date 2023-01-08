import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { isMatch } from '../matcher'
import { Status } from '../types'
import { createLecture, deleteLecture, getAllLectures } from './action'

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
	builder.addCase(createLecture.fulfilled, (state, action) => {
		state.message = action.payload.data.message
		state.status = 'fulfilled'
		state.lectures.push(action.payload.data.lecture)
	})
	builder.addCase(deleteLecture.fulfilled, (state, action) => {
		state.message = action.payload.data.message
		state.status = 'fulfilled'
		state.lectures = state.lectures.filter((lecture) => lecture.id !== action.payload.data.lecture.id)
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

