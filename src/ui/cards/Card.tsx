import React from 'react'
import {
	Box,
	Card as MdCard,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	Tooltip,
	Typography,
	Button
} from '@mui/material'
import { useAppSelector } from '../../store'
import { Delete, Edit } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

interface Props {
	item: Lectures.Lecture
}

const Card = ({ item }: Props) => {
	const { user } = useAppSelector((state) => state.auth)
	const navigate = useNavigate()

	const asLink = (link: string) => {
		navigate(link)
	}

	return (
		<MdCard
			elevation={2}
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<CardHeader title={item.name} />
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant='body1'>{item.description}</Typography>
			</CardContent>
			<CardActions
				sx={{
					display: 'flex',
					flexWrap: 'wrap'
				}}
			>
				<Button
					variant='contained'
					color='primary'
					size='small'
					onClick={() => asLink('lectures/' + item.id)}
				>
					Read Lectures
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='small'
				>
					Tasks
				</Button>

				{user?.isAdmin && (
					<Box
						display='flex'
						justifyContent='flex-end'
						flexGrow={1}
					>
						<Tooltip
							title='Delete task'
							arrow
						>
							<IconButton color='error'>
								<Delete />
							</IconButton>
						</Tooltip>
						<Tooltip
							title='Edit Task'
							arrow
						>
							<IconButton color='info'>
								<Edit />
							</IconButton>
						</Tooltip>
					</Box>
				)}
			</CardActions>
		</MdCard>
	)
}

export default Card

