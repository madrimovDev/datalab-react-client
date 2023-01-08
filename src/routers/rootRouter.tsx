import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
// import AdminLayout from '../layouts/AdminLayout'
// import UserLayout from '../layouts/UserLayout'
import { RequireAuth } from '../pages'
import Auth from '../pages/auth'
import RequireRole from '../pages/requireRole'
import adminRouter from './adminRouter'
// import userRouter from './userRouter'

const rootRouter = createBrowserRouter([
	{
		path: '/auth/:auth',
		element: <Auth />
	},
	{
		path: '/',
		element: <RequireAuth />,
		children: [
			{
				index: true,
				element: <RequireRole />
			},
			{
				path: '/admin',
				element: <AdminLayout />,
				children: adminRouter
			}
		]
	}
])

export default rootRouter

