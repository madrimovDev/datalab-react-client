import React from 'react'

interface Props {
	isAdmin?: boolean
}

const Sidebar = ({ isAdmin }: Props) => {
	return <div>Sidebar {isAdmin?.toString()}</div>
}

export default Sidebar

