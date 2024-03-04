import {Await, useLoaderData} from 'react-router-dom';
import {Product} from '../../interfaces/product.interface.ts';
import {Suspense} from 'react';
import {TailSpin} from 'react-loader-spinner';
import styles from './Product.module.css';

export function Product() {

	const data = useLoaderData() as { data: Product };

	return <>
		<Suspense fallback={
			<div className={styles['loading']}>
				<TailSpin color="orange" radius={'8px'}/>
                Загрузка...
			</div>}>
			<Await resolve={data.data}>
				{({data}: { data: Product }) => (
					<> Product - {data.name}</>
				)}
			</Await>
		</Suspense>
	</>;
}