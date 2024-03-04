import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, defer, RouterProvider} from 'react-router-dom';
import {Error} from './pages/Error/Error.tsx';
import {Layuot} from './layuot/Layout/Layuot.tsx';
import {Cart} from './pages/Cart/Cart.tsx';
import {Product} from './pages/Product/Product.tsx';
import axios from 'axios';
import {PREFIX} from './helpers/API.ts';
import styles from './pages/Product/Product.module.css';
import {TailSpin} from 'react-loader-spinner';


const Menu = lazy(() => import('./pages/Menu/Menu'));


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layuot/>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={
					<div className={styles['loading']}>
						<TailSpin color="orange" radius={'8px'}/>
                        Загрузка...
					</div>}><Menu/></Suspense>
			},
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>,
				errorElement: <>Ошибка</>,
				loader: async ({params}) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 2000);
						})
					});
					// return defer({
					// 	data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					// });

					// await new Promise<void>((resolve) => {
					// 	setTimeout(() => {
					// 		resolve();
					// 	}, 2000);
					// });
					// const {data} = await axios.get(`${PREFIX}/products/${params.id}`);
					// return data;
				}
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



