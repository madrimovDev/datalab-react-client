import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Lecture, Lectures } from '../pages'

const adminRouter: RouteObject[] = [
	{
		index: true,
		element: <Lectures />
	},
	{
		path: 'lectures/:id',
		element: <Lecture />
	}
]

export default adminRouter

