import axios from 'axios'

const api = axios.create({
	baseURL: 'http://neowise.uz:7070/api'
})

api.interceptors.request.use(
	(config) => {
		if (!config.headers) {
			throw Error('config header not found')
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		config.headers.Authorization = localStorage.getItem('userToken')
		return config
	},
	(err) => {
		console.log(err)
	}
)

export default api

