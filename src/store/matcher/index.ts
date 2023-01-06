import { AnyAction } from '@reduxjs/toolkit'

export const isMatch = (start: string, end: '/pending' | '/fulfilled' | '/rejected') => (action: AnyAction) => {
	return action.type.startsWith(start) && action.type.endsWith(end)
}

