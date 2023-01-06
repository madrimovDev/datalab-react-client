import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Text } from '@nextui-org/react'

interface Props {
	type: string
}

const Brand = ({ type }: Props) => {
	return (
		<Navbar.Brand
			as={Link}
			to='/'
			css={{
				fontSize: '$lg',
				color: '$primary'
			}}
		>
			Datalab
			<Text
				span
				css={{
					textTransform: 'capitalize',
					ml: '$2',
					color: 'inherit'
				}}
			>
				{type}
			</Text>
		</Navbar.Brand>
	)
}

export default Brand

