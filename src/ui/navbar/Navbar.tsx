import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { MdLogout } from 'react-icons/md'
import { useAppDispatch } from '../../store'
import { logout } from '../../store/auth/action'

interface Props {
	type: 'admin' | 'user'
}

const Navbar = ({ type }: Props) => {
	const dispatch = useAppDispatch()
	return (
		<AppBar>
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
					startIcon={<MdLogout />}
				>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar

