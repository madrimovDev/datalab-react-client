import { AnyAction } from 'redux'

export const isPending = (action: AnyAction): boolean => {
	return action.type.startsWith('auth/') && action.type.endsWith('/pending')
}

export const isFulfilled = (action: AnyAction): boolean => {
	return action.type.startsWith('auth/') && action.type.endsWith('/fulfilled')
}

export const isRejected = (action: AnyAction): boolean => {
	return action.type.startsWith('auth/') && action.type.endsWith('/rejected')
}

