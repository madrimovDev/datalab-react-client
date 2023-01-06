import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Lectures, Lecture } from '../pages'

const adminRouter: RouteObject[] = [
	{
		path: '',
		element: <Lectures />,
		children: [
			{
				path: 'lectures/:id',
				element: <Lecture />
			}
		]
	}
]

export default adminRouter

