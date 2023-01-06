import React, { useEffect } from 'react'
import { Grid } from '@nextui-org/react'
import { useAppDispatch, useAppSelector } from '../../store'
import { Sidebar } from '../../ui'
import { getAllLectures } from '../../store/lectures/action'
import { Outlet } from 'react-router-dom'

const Lectures = () => {
	const { user } = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getAllLectures())
	}, [])

	return (
		<Grid.Container>
			<Grid xs={3}>
				<Sidebar isAdmin={user?.isAdmin} />
			</Grid>
			<Grid xs={9}>
				<Outlet />
			</Grid>
		</Grid.Container>
	)
}

export default Lectures

