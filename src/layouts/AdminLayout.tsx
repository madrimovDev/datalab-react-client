import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui'

const AdminLayout = () => {
	return (
		<div>
			<Navbar type='admin'/>
			<Outlet />
		</div>
	)
}

export default AdminLayout

