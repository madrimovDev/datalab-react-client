import React from 'react'
import { Button, Divider, styled, Text } from '@nextui-org/react'
import List from './list/List'

interface Props {
	isAdmin?: boolean
}

const Sidebar = ({ isAdmin }: Props) => {
	return (
		<StyledSidebar>
			<Text h4>Lectures</Text>
			<Divider css={{ my: '$3' }} />
			{isAdmin && <Button size='sm'>Add Lectures</Button>}
			<List />
		</StyledSidebar>
	)
}

const StyledSidebar = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	boxShadow: '$md',
	width: '100%',
	margin: '$4',
	borderRadius: '$base',
	padding: '$6',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: '$accents2'
})

export default Sidebar

