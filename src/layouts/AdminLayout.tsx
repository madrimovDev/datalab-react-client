import { Container } from '@nextui-org/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui'

const AdminLayout = () => {
	return (
		<>
			<Navbar type='admin' />
			<Container fluid>
				<Outlet />
			</Container>
		</>
	)
}

export default AdminLayout

