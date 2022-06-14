import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import User from './User.js';

export default function Detailspage() {
	const [{data, error}, setData] = useState({data: [], error: null});
	const {idFromUrl} = useParams();

	console.log(data);

	useEffect(() => {
		fetchUser(idFromUrl);
		function fetchUser(idFromUrl) {
			fetch(`/api/users/${idFromUrl}`)
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
				<User
					key={data._id}
					name={data.name}
					id={data._id}
					age={data.age}
					email={data.email}
					details="true"
				/>
			</section>
		</Main>
	);
}

const Main = styled.main`
	margin: 6.5em 0 8em 0;
`;
