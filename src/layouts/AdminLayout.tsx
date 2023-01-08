import React from 'react'
import { Box, Fab } from '@mui/material'

import { Navbar, SpeedDial } from '../ui'

const AdminLayout = () => {
	return (
		<Box
			width='100%'
			height='100vh'
		>
			<Navbar type='admin' />
			<SpeedDial />
		</Box>
	)
}

export default AdminLayout

