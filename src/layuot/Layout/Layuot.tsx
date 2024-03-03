import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layuot.module.css';
import Button from '../../components/Button/Button.tsx';
import cn from 'classnames';

export function Layuot() {


	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src='/avatar.png' alt=""/>
				<div className={styles['name']}>Никита Вьюгов</div>
				<div className={styles['email']}>vyugov98@bk.ru</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to='/' className={({isActive}) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src='/menu-icon.svg' alt=""/>
                    Меню</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src='/cart-icon.svg' alt=""/>
                    Корзина</NavLink>
			</div>
			<Button className={styles['exit']}>
				<img src='/exx.svg' alt=""/>
                Выйти
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet/>
		</div>
	</div>;
}
