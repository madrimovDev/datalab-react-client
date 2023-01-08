import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux/es/exports'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './routers/rootRouter'
import store from './store'
import CssBaseLine from '@mui/material/CssBaseline'

const rooContainer = document.getElementById('root') as HTMLElement
const root = createRoot(rooContainer)

const app = (
	<>
		<Provider store={store}>
			<RouterProvider router={rootRouter} />
			<CssBaseLine />
		</Provider>
	</>
)

root.render(app)

