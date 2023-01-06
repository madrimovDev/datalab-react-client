import React from 'react'
import { RouteObject } from 'react-router-dom'
import Lectures from '../pages/lectures'

const adminRouter: RouteObject[] = [
	{
		index: true,
		element: <Lectures />
	}
]

export default adminRouter

