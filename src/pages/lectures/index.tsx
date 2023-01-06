import React from 'react'
import { Grid } from '@nextui-org/react'
import { useAppSelector } from '../../store'
import { Sidebar } from '../../ui'

const Lectures = () => {
	const { user } = useAppSelector((state) => state.auth)
	return (
		<Grid.Container>
			<Grid
				css={{ border: '1px solid red' }}
				xs={2}
			>
				<Sidebar isAdmin={user?.isAdmin} />
			</Grid>
			<Grid
				css={{ border: '1px solid red' }}
				xs={10}
			>
				Content
			</Grid>
		</Grid.Container>
	)
}

export default Lectures

