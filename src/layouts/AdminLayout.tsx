import React from 'react'
import { Box, Container } from '@mui/material'

import { Navbar, SpeedDial } from '../ui'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
	return (
		<Box
			width='100%'
			height='100vh'
		>
			<Navbar type='admin' />
			<Container>
				<Outlet />
			</Container>
			<SpeedDial />
		</Box>
	)
}

export default AdminLayout

