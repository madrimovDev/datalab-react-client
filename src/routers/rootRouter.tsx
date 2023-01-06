import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts'
import AdminLayout from '../layouts/AdminLayout'
import UserLayout from '../layouts/UserLayout'
import { RequireAuth } from '../pages'
import Auth from '../pages/auth'
import RequireRole from '../pages/requireRole'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth />,
		children: [
			{
				path: '/',
				element: <RequireRole />
			},
			{
				path: '/admin',
				element: <AdminLayout />
			},
			{
				path: '/user',
				element: <UserLayout />
			}
		]
	},
	{
		path: '/auth/:auth',
		element: <Auth />
	}
])

export default rootRouter

