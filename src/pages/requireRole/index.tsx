import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../store'

const RequireRole = () => {
	const { user } = useAppSelector((state) => state.auth)
	const location = useLocation()

	return user?.isAdmin ? (
		<Navigate
			to={'/admin'}
			replace
			state={{ from: location }}
		/>
	) : (
		<Navigate
			to={'/user'}
			replace
			state={{ from: location }}
		/>
	)
}

export default RequireRole

