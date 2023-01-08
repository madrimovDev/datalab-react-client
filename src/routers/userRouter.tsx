import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Lectures } from '../pages'

const userRouter: RouteObject[] = [
	{
		path: '',
		element: <Lectures />,
		children: [
			{
				path: 'lectures',
				element: <Lectures />
			}
		]
	}
]

export default userRouter

