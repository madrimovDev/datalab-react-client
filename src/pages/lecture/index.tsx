import { Container, Text } from '@nextui-org/react'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store'

const Lecture = () => {
	const { id } = useParams()
	const { lectures } = useAppSelector((state) => state.lectures)
	
	const lecture = useMemo(() => {
		if (id) {
			return lectures.find((item) => item.id === +id)
		}
	}, [id])

	if (!lecture) return null

	return (
		<Container>
			<Text h2>{lecture.name}</Text>
			<Text>{lecture.description}</Text>
		</Container>
	)
}

export default Lecture

