import Heading from '../../components/Heading/Heading.tsx';
import Search from '../../components/Search/Search.tsx';
import styles from './menu.module.css';
import {Product} from '../../interfaces/product.interface.ts';
import {useEffect, useState} from 'react';
import {PREFIX} from '../../helpers/API.ts';
import axios, {AxiosError} from 'axios';
import {MenuList} from './MenuList/MenuList.tsx';

export function Menu() {

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);

		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);


	return <>
		<div className={styles['head']}>
			<Heading>Меню</Heading>
			<Search placeholder='Введите блюдо или состав'/>
		</div>
		<div className={styles['cards']}>
			{error && <>Error...</>}
			{!isLoading && <MenuList products={products}/>}
			{isLoading && <>Загружаем продукты...</>}

		</div>
	</>;
}

export default Menu;