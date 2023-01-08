import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { login, register } from '../../store/auth/action'
import { Box, Paper, Stack, Typography, TextField, Button, Link as MLink, Divider } from '@mui/material'
import { MdLogin } from 'react-icons/md'

const Register = () => {
	const [username, setUserName] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [group, setGroup] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const dispatch = useAppDispatch()

	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
		dispatch(register({ username, password, name, group }))
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
				component='form'
				onSubmit={onSubmit}
				sx={{
					width: '350px',
					padding: '20px'
				}}
				variant='outlined'
			>
				<Stack spacing={2}>
					<Typography variant='h5'>Create Account</Typography>
					<Divider />
					<TextField
						size='small'
						label='Username'
						value={username}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<TextField
						size='small'
						label='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						size='small'
						label='Group'
						value={group}
						onChange={(e) => setGroup(e.target.value)}
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
						Already have an account?
						<MLink
							ml={1}
							underline='hover'
							component={Link}
							to='/auth/login'
						>
							Log in
						</MLink>
					</Typography>
				</Stack>
			</Paper>
		</Box>
	)
}

export default Register

