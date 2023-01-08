import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { getAllLectures } from '../../store/lectures/action'
import { Cards } from '../../ui'

const Lectures = () => {
	const { lectures, status } = useAppSelector((state) => state.lectures)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getAllLectures())
	}, [])

	return (
		<Box mt={4}>
			<Cards
				items={lectures}
				loading={status === 'pending'}
			/>
		</Box>
	)
}

export default Lectures

