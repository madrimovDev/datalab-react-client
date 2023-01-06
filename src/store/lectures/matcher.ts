import { AnyAction } from 'redux'

export const isPending = (action: AnyAction) => {
	return action.type.startsWith('lectures/') && action.type.endsWith('/pending')
}

export const isRejected = (action: AnyAction) => {
	return action.type.startsWith('lectures/') && action.type.endsWith('/rejected')
}