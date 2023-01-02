import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './routers/rootRouter'

const rooContainer = document.getElementById('root') as HTMLElement
const root = createRoot(rooContainer)

const app = (
	<>
		<NextUIProvider>
			<RouterProvider router={rootRouter} />
		</NextUIProvider>
	</>
)

root.render(app)
