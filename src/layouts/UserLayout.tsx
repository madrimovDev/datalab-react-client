import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui'

const UserLayout = () => {
	return (
		<>
			<Navbar type='user' />

			<Container>
				<Outlet />
			</Container>
		</>
	)
}

export default UserLayout

