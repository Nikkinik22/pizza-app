import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Menu} from './pages/Menu/Menu.tsx';
import {Error} from './pages/Error/Error.tsx';
import {Layuot} from './layuot/Menu/Menu.tsx';
import {Cart} from './pages/Cart/Cart.tsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layuot/>,
		children: [
			{
				path: '/',
				element: <Menu/>
			},
			{
				path: '/cart',
				element: <Cart/>
			}
		]
	},
	{
		path: '*',
		element: <Error/>
	}

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);

