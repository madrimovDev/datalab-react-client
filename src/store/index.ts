import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authReducer from './auth/reducer'
import lecturesReducer from './lectures/reducer'
import lectureReducer from './lecture/reducer'

const store = configureStore({
	reducer: {
		auth: authReducer,
		lectures: lecturesReducer,
		lecture: lectureReducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false
		})
	}
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

