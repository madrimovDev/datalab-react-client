import React from 'react'
import { Container } from '@mui/material'

import { Navbar, SpeedDial } from '../ui'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
	return (
		<>
			<Navbar type='admin' />
			<Container>
				<Outlet />
			</Container>
			<SpeedDial />
		</>
	)
}

export default AdminLayout

