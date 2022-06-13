import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import Createpage from './components/Createpage';
import Footer from './components/Footer';
import HeaderCreate from './components/Header-Create';
import HeaderHome from './components/Header-Home';
import Homepage from './components/Homepage';

export default function App() {
	return (
		<AppContainer>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HeaderHome />
							<Homepage />
						</>
					}
				/>
				<Route
					path="/create"
					element={
						<>
							<HeaderCreate />
							<Createpage />
						</>
					}
				/>
			</Routes>
			<Footer />
		</AppContainer>
	);
}

const AppContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto', sans-serif;
`;
