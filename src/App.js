import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import Createpage from './components/Createpage';
import Detailspage from './components/Detailspage';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';

export default function App() {
	return (
		<AppContainer>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header title="Home" />
							<Homepage />
						</>
					}
				/>
				<Route
					path="/create"
					element={
						<>
							<Header title="Create" />
							<Createpage />
						</>
					}
				/>
				<Route
					path="/:idFromUrl"
					element={
						<>
							<Header title="Details" />
							<Detailspage />
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
