import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../store'

const RequireAuth = () => {
	const { status } = useAppSelector((state) => state.auth)
	const location = useLocation()
	return status === 'fulfilled' ? (
		<Outlet />
	) : (
		<Navigate
			to='auth/login'
			replace
			state={{ from: location }}
		/>
	)
}

export default RequireAuth
