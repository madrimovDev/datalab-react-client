import React from 'react'
import { styled } from '@nextui-org/react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
	item: Lectures.Lecture
}

const ListItem = ({ item }: Props) => {
	const { pathname } = useLocation()
	const isActive = pathname.includes(item.id.toString())
	return (
		<li>
			<StyledLink
				isActive={isActive}
				to={'lectures/' + item.id}
			>
				{item.name}
			</StyledLink>
		</li>
	)
}

const StyledLink = styled(Link, {
	px: '$8',
	py: '$2',
	background: '$accents0',
	display: 'block',
	borderRadius: '$xs',
	transition: '$button',
	'&:hover': {
		background: '$primaryLightHover'
	},
	variants: {
		isActive: {
			['true']: {
				background: '$secondary',
				color: '$white',
				'&:hover': {
					background: '$secondary'
				}
			}
		}
	}
})

export default ListItem

