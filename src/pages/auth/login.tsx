import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { login } from '../../store/auth/action'
import { Box, Paper, Stack, Typography, TextField, Button, Link as MLink, Divider } from '@mui/material'
import { Login as MdLogin } from '@mui/icons-material'

const Login = () => {
	const [username, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const dispatch = useAppDispatch()

	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
		dispatch(login({ username, password }))
	}

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Paper
				onSubmit={onSubmit}
				component='form'
				sx={{
					width: '350px',
					padding: '20px'
				}}
				variant='outlined'
			>
				<Stack spacing={2}>
					<Typography variant='h5'>Login</Typography>
					<Divider />
					<TextField
						size='small'
						label='Username'
						value={username}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<TextField
						size='small'
						label='Password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						variant='contained'
						type='submit'
						endIcon={<MdLogin />}
					>
						Login
					</Button>
					<Divider />
					<Typography>
						No account?
						<MLink
							ml={1}
							underline='hover'
							component={Link}
							to='/auth/register'
						>
							Create one
						</MLink>
					</Typography>
				</Stack>
			</Paper>
		</Box>
	)
}

export default Login

