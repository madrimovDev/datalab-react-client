import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
	return (
		<div>
			navbar Admin
			<Outlet />
		</div>
	)
}

export default AdminLayout

