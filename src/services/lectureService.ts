import api from '../api'

const lectureService = {
	baseUrl: '/lectures',
	async getAll() {
		const response = await api.get<Lectures.RootObject>(this.baseUrl)
		return response
	}
}

export default lectureService

