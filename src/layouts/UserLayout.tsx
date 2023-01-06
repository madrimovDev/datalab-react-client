import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
	return (
		<div>
			navbar user
			<Outlet />
		</div>
	)
}

export default UserLayout

