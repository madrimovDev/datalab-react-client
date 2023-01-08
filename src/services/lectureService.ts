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
	},
	async create(title: string, description: string, content: string) {
		const response = await api.post<Lecture.RootObject>(this.baseUrl, { name: title, description, content })
		return response
	},
	async deleteLecture(id: string | number) {
		const response = await api.delete<Lecture.RootObject>(`${this.baseUrl}/${id}`)
		return response
	}
}

export default lectureService

