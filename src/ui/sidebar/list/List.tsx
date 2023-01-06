import React from 'react'
import { styled } from '@nextui-org/react'
import { useAppSelector } from '../../../store'
import ListItem from './ListItem'

const List = () => {
	const { lectures } = useAppSelector((state) => state.lectures)
	return (
		<StyledList>
			{lectures.map((lecture) => {
				return (
					<ListItem
						key={lecture.id}
						item={lecture}
					/>
				)
			})}
		</StyledList>
	)
}

const StyledList = styled('ul', {
	width: '100%',
	margin: 0,
	mt: '$10'
})

export default List

