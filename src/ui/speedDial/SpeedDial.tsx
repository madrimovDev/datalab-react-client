import React, { useState } from 'react'
import { SpeedDial as Dial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import actions from './actions'
import { Create } from '@mui/icons-material'
import { useAppSelector } from '../../store'

const SpeedDial = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const { user } = useAppSelector((state) => state.auth)

	if (!user?.isAdmin) return null

	return (
		<>
			<Dial
				ariaLabel='Create'
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
				icon={<SpeedDialIcon openIcon={<Create />} />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						tooltipOpen
						sx={{
							'& span': {
								width: 'max-content'
							}
						}}
						onClick={handleClose}
					/>
				))}
			</Dial>
		</>
	)
}

export default SpeedDial

