import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RequireAuth } from '../pages'
import Auth from '../pages/auth'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth />,
		children: [
			{
				path: '/',
				element: <>Hello</>
			}
		]
	},
	{
		path: '/auth/:auth',
		element: <Auth />
	}
])

export default rootRouter

