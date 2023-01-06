import React, { memo, useEffect } from 'react'
import { Grid } from '@nextui-org/react'
import { useAppDispatch, useAppSelector } from '../../store'
import { Sidebar } from '../../ui'
import { getAllLectures } from '../../store/lectures/action'
import { Outlet, useNavigate } from 'react-router-dom'

const Lectures = () => {
	const { user } = useAppSelector((state) => state.auth)
	const { lectures } = useAppSelector((state) => state.lectures)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getAllLectures())
	}, [])

	useEffect(() => {
		if (lectures.length) {
			navigate('lectures' + '/' + lectures[0].id)
		}
	}, [lectures])

	return (
		<Grid.Container css={{ mt: '$8' }}>
			<Grid xs={3}>
				<Sidebar isAdmin={user?.isAdmin} />
			</Grid>
			<Grid xs={9}>
				<Outlet />
			</Grid>
		</Grid.Container>
	)
}

export default memo(Lectures)

