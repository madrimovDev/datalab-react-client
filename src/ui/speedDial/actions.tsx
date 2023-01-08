import React from 'react'
import { Create } from '@mui/icons-material'

export interface Action {
	icon: JSX.Element
	name: string
	slug: string
}

const actions: Action[] = [
	{
		icon: <Create />,
		name: 'Create Lecture',
		slug: 'create-lecture'
	},
	{
		icon: <Create />,
		name: 'Create Task',
		slug: 'create-task'
	}
]

export default actions

