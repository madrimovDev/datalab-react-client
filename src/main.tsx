import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux/es/exports'
import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import rootRouter from './routers/rootRouter'
import store from './store'

const rooContainer = document.getElementById('root') as HTMLElement
const root = createRoot(rooContainer)

const app = (
	<>
		<Provider store={store}>
			<NextUIProvider>
				<RouterProvider router={rootRouter} />
			</NextUIProvider>
		</Provider>
	</>
)

root.render(app)

