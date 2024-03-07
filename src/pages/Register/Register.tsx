import styles from './Register.module.css';
import Heading from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import {Link} from 'react-router-dom';

export function Register() {
	return <div className={styles['login']}>
		<Heading>Регистрация</Heading>

		<form className={styles['form']}>
			<div className={styles['field']}>
				<label htmlFor="email">Ваш email</label>
				<Input id="email" name="email" placeholder="Email" className={styles['input']}/>
			</div>
			<div className={styles['field']}>
				<label htmlFor="password">Ваш пароль</label>
				<Input id="password" name="password" type="password" placeholder="Пароль"/>
			</div>
			<div className={styles['field']}>
				<label htmlFor="">Ваше имя</label>
				<Input id="name" type="name" placeholder="Имя"/>
			</div>
			<Button appearance="big">Зарегистрироваться</Button>
		</form>


		<div className={styles['links']}>
			<div>Есть акканут?</div>
			<Link to="/auth/login">Войти</Link>
		</div>
	</div>;

}