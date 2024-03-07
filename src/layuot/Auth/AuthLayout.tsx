import styles from './AuthLayout.module.css';
import {Outlet} from 'react-router-dom';


export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img src='/LogoLogin.svg' alt="Логотип"/>
		</div>
		<div className={styles['content']}>
			<Outlet/>
		</div>
	</div>;
}