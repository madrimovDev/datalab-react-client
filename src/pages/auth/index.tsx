import React, { useLayoutEffect, useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store'
import Login from './login'
import Register from './register'

const Auth = () => {
	const { auth } = useParams()
	const { status } = useAppSelector((state) => state.auth)
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const nav = useMemo(() => {
		return status === 'fulfilled'
	}, [status, pathname])

	useLayoutEffect(() => {
		if (nav) {
			setTimeout(() => {
				navigate('/')
			}, 0)
			return
		}
	}, [status])

	if (status !== 'fulfilled') {
		return (
			<>
				{auth === 'login' && <Login />}
				{auth === 'register' && <Register />}
			</>
		)
	}
	return null
}

export default Auth

