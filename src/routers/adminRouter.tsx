import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Lectures, Lecture, CreateLecture } from '../pages'

const adminRouter: RouteObject[] = [
	{
		path: '',
		element: <Lectures />,
		children: [
			{
				path: 'lectures/:id',
				element: <Lecture />
			},
			{
				path: 'create-lecture',
				element: <CreateLecture />
			}
		]
	}
]

export default adminRouter

