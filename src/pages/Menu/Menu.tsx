import Heading from '../../components/Heading/Heading.tsx';
import Search from '../../components/Search/Search.tsx';
import styles from './menu.module.css';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import {Product} from '../../interfaces/product.interface.ts';
import {useEffect, useState} from 'react';
import {PREFIX} from '../../helpers/API.ts';
import axios from 'axios';

export function Menu() {

	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);

		} catch (e) {
			console.error(e);
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
			{products.map(p => (
				<ProductCard
					key={p.id}
					id={p.id}
					name={p.name}
					description={p.ingredients.join(', ')}
					image={p.image}
					price={p.price}
					rating={p.rating}
				/>
			))}

		</div>
	</>;
}