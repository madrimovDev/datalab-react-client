import React from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { AiOutlineLogout } from 'react-icons/ai'
import { useAppDispatch } from '../../store'
import { logout } from '../../store/auth/action'

const Logout = () => {
	const dispatch = useAppDispatch()
	const clickHandler = () => dispatch(logout())
	return (
		<Tooltip
			content='Logout'
			placement='bottom'
		>
			<Button
				onClick={clickHandler}
				size='sm'
				auto
				color='primary'
				icon={<AiOutlineLogout />}
			/>
		</Tooltip>
	)
}

export default Logout

