import React, { useLayoutEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store'
import Login from './login'
import Register from './register'

const Auth = () => {
	const { auth } = useParams()
	const { status, user } = useAppSelector((state) => state.auth)
	const navigate = useNavigate()

	useLayoutEffect(() => {
		if (status === 'fulfilled' && user) {
			navigate('/')
		} else {
			navigate('/auth/login')
		}
	}, [status, user])

	return (
		<>
			{auth === 'login' && <Login />}
			{auth === 'register' && <Register />}
		</>
	)
}

export default Auth

