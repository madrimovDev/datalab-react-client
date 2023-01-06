import api from '../api'

const lectureService = {
	baseUrl: '/lectures',
	async getAll() {
		const response = await api.get<Lectures.RootObject>(this.baseUrl)
		return response
	},
	async getById(id: string | number) {
		const response = await api.get<Lecture.RootObject>(`${this.baseUrl}/${id}`)
		return response
	}
}

export default lectureService

