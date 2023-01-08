import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Card from './Card'

interface Props {
	items: Lectures.Lecture[]
	loading?: boolean
}

const Cards = ({ items, loading }: Props) => {
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

