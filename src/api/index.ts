import axios from 'axios'

const api = axios.create({
	baseURL: 'http://neowise.uz:7070/api'
})

export default api