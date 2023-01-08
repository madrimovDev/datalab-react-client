import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Card from './Card'
import { Paper, Skeleton, Stack } from '@mui/material'

interface Props {
	items: Lectures.Lecture[]
	loading?: boolean
}

const Cards = ({ items, loading }: Props) => {
	if (loading) {
		return (
			<Grid
				container
				spacing={4}
			>
				{[1, 2, 3, 4].map((item) => {
					return (
						<Grid
							key={item}
							xs={12}
							md={6}
						>
							<Paper sx={{ p: 2 }}>
								<Stack spacing={2}>
									<Skeleton variant='text' />
									<Skeleton
										variant='rectangular'
										width='100%'
										height={50}
									/>
									<Stack
										spacing={1}
										direction='row'
									>
										<Skeleton
											variant='rectangular'
											width={70}
										/>
										<Skeleton
											variant='rectangular'
											width={70}
										/>
									</Stack>
								</Stack>
							</Paper>
						</Grid>
					)
				})}
			</Grid>
		)
	}
	return (
		<Grid
			container
			spacing={4}
		>
			{items.map((item) => {
				return (
					<Grid
						key={item.id}
						xs={12}
						md={6}
					>
						<Card item={item} />
					</Grid>
				)
			})}
		</Grid>
	)
}

export default Cards

