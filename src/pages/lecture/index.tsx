import { Container, Text } from '@nextui-org/react'
import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import getById from '../../store/lecture/action'

const Lecture = () => {
	const { id } = useParams()
	const { lecture } = useAppSelector((state) => state.lecture)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (id) {
			dispatch(getById(id))
		}
	}, [id])

	if (!lecture) return null

	return (
		<Container>
			<Text h2>{lecture.name}</Text>
			<Text>{lecture.description}</Text>
			<Text>{lecture.content}</Text>
		</Container>
	)
}

export default Lecture

