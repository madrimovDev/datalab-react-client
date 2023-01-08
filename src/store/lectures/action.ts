import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import lectureService from '../../services/lectureService'

export const getAllLectures = createAsyncThunk('lectures/getAll', async (_, { rejectWithValue }) => {
	try {
		const result = await lectureService.getAll()
		return result
	} catch (e) {
		const error = e as AxiosError<LectureError.RootObject>
		throw rejectWithValue(error.response?.data)
	}
})

type CreatingLecture = {
	title: string
	description: string
	content: string
}

export const createLecture = createAsyncThunk(
	'lectures/create',
	async ({ title, description, content }: CreatingLecture, { rejectWithValue }) => {
		try {
			const result = await lectureService.create(title, description, content)
			return result
		} catch (e) {
			const error = e as AxiosError<LectureError.RootObject>
			throw rejectWithValue(error.response?.data)
		}
	}
)

export const deleteLecture = createAsyncThunk('lectures/delete', async (id: number | string, { rejectWithValue }) => {
	try {
		const result = await lectureService.deleteLecture(id)
		return result
	} catch (e) {
		const error = e as AxiosError<LectureError.RootObject>
		throw rejectWithValue(error.response?.data)
	}
})

