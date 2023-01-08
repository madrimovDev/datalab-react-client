import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useAppDispatch } from '../../store'
import { logout } from '../../store/auth/action'
import { Logout } from '@mui/icons-material'

interface Props {
	type: 'admin' | 'user'
}

const Navbar = ({ type }: Props) => {
	const dispatch = useAppDispatch()
	return (
		<AppBar
			component='nav'
			position='sticky'
		>
			<Toolbar>
				<Typography
					component='div'
					sx={{ flexGrow: 1 }}
				>
					Datalab {type}
				</Typography>
				<Button
					color='inherit'
					size='small'
					onClick={() => dispatch(logout())}
					startIcon={<Logout />}
				>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar

