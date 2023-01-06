import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui'

const UserLayout = () => {
	return (
		<div>
			<Navbar type='user' />
			<Outlet />
		</div>
	)
}

export default UserLayout

