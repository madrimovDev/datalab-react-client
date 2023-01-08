import React from 'react'
import { RouteObject } from 'react-router-dom'
import { CreateLecture, Lecture, Lectures } from '../pages'

const userRouter: RouteObject[] = [
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

export default userRouter

