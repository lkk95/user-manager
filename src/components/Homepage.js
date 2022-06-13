import {useState, useEffect} from 'react';
import styled from 'styled-components';

import User from './User.js';

export default function Homepage() {
	const [{data, error}, setData] = useState({data: [], error: null});

	useEffect(() => {
		fetchData();
		function fetchData() {
			fetch('/api/users')
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					} else {
						return response.json();
					}
				})
				.then(data => {
					setData({
						data: data.data,
						error: null,
					});
				})
				.catch(error => {
					setData({
						data: [],
						error: error.message,
					});
				});
		}
	}, []);

	return (
		<Main>
			{error && <div>An error occured: {error}</div>}
			<section>
				{data.map(item => {
					return <User key={item._id} name={item.name} />;
				})}
			</section>
		</Main>
	);
}

const Main = styled.main`
	margin: 6.5em 0 8em 0;
`;
