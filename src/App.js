import {Routes, Route} from 'react-router-dom';

import Homepage from './components/Homepage';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</>
	);
}
