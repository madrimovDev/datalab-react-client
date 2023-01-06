import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import lectureService from '../../services/lectureService'
import { LectureError } from '../../services/types/lectures'

export const getAllLectures = createAsyncThunk('lectures/getAll', async (_, { rejectWithValue }) => {
	try {
		const result = await lectureService.getAll()
		return result
	} catch (e) {
		const error = e as AxiosError<LectureError.RootObject>
		throw rejectWithValue(error.response?.data)
	}
})

