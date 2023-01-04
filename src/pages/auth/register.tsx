import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Card, Grid, Input, Link as NLink } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import { login } from '../../store/auth/action'

const Register = () => {
	const [name, setName] = useState<string>('')
	const [group, setGroup] = useState<string>('')
	const [username, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useAppDispatch()
	const selector = useAppSelector((state) => state.auth)
	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
		dispatch(login({ username, password }))
	}
	useEffect(() => {
		console.log(selector)
	}, [selector])

	return (
		<Grid.Container
			css={{
				w: '100dvw',
				h: '100dvh'
			}}
			justify='center'
			alignItems='center'
		>
			<Card
				as='form'
				onSubmit={onSubmit}
				css={{
					w: '300px',
					p: 30,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					gap: '$10'
				}}
			>
				<Input
					label='Username'
					type='text'
					value={username}
					onChange={(event) => setUserName(event.target.value)}
				/>
				<Input
					label='Group'
					type='text'
					value={group}
					onChange={(event) => setGroup(event.target.value)}
				/>
				<Input
					label='Name'
					type='text'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<Input.Password
					label='Password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button type='submit'>Signup</Button>
				<NLink
					to={'/auth/login'}
					as={Link}
				>
					Login
				</NLink>
			</Card>
		</Grid.Container>
	)
}

export default Register

