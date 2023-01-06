import React from 'react'
import { Navbar as NextNavbar } from '@nextui-org/react'
import Logout from './Logout'
import Brand from './Brand'

interface Props {
	type: 'admin' | 'user'
}

const Navbar = ({ type }: Props) => {
	return (
		<NextNavbar
			css={{
				shadow: '$sm'
			}}
		>
			<Brand type={type} />
			<Logout />
		</NextNavbar>
	)
}

export default Navbar

