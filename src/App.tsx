import Button from './components/Button/Button.tsx';
import {MouseEvent, useState} from 'react';
import Input from './components/Input/Input.tsx';

function App() {
	const [counter, setCounter] = useState(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearance='big' onClick={addCounter}>Кнопка</Button>
			<Input placeholder='Email'/>
		</>
	);
}

export default App;

