import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Auth from '../pages/auth'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <Auth />
	}
])

export default rootRouter

