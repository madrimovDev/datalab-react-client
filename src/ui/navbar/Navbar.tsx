import React from 'react'
import { Button, Navbar as NextNavbar, Text, Tooltip } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

interface Props {
	type: 'admin' | 'user'
}

const { Brand } = NextNavbar

const Navbar = ({ type }: Props) => {
	return (
		<NextNavbar
			css={{
				shadow: '$sm'
			}}
		>
			<Brand
				as={Link}
				to='/'
				css={{
					fontSize: '$lg',
					color: '$primary'
				}}
			>
				Datalab
				<Text
					span
					css={{
						textTransform: 'capitalize',
						ml: '$2',
						color: 'inherit'
					}}
				>
					{type}
				</Text>
			</Brand>
			<Tooltip content='Logout' placement='bottom'>
				<Button
					size='sm'
					auto
					color='primary'
					icon={<AiOutlineLogout />}
				/>
			</Tooltip>
		</NextNavbar>
	)
}

export default Navbar

