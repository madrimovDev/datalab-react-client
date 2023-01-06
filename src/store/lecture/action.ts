import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import lectureService from '../../services/lectureService'

export const getById = createAsyncThunk('lecture/getById', async (id: number | string, { rejectWithValue }) => {
	try {
		const result = await lectureService.getById(id)
		return result
	} catch (e) {
		const error = e as AxiosError<LectureError.RootObject>
		throw rejectWithValue(error.response?.data)
	}
})

export default getById

