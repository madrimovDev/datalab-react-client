import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import getById from '../../store/lecture/action'

const Lecture = () => {
	const { id } = useParams()
	const lecture = useAppSelector((state) => state.lecture)
	const dispatch = useAppDispatch()
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (id) {
			dispatch(getById(id))
		}
	}, [id])

	useEffect(() => {
		if (lecture.lecture && contentRef.current) {
			contentRef.current.innerHTML = lecture.lecture.content
		}
	}, [lecture])

	if (!lecture.lecture) return null

	if (lecture.status === 'pending') return null
	
	return (
		<Container maxWidth='md'>
			<Stack
				spacing={2}
				divider={<Divider />}
			>
				<Typography variant='h2'>{lecture.lecture.name}</Typography>
				<Typography>{lecture.lecture.description}</Typography>
				<Box ref={contentRef} />
			</Stack>
		</Container>
	)
}

export default Lecture

