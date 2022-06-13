import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

export default function Detailspage() {
	const [{data, error}, setData] = useState({data: [], error: null});
	const {idFromUrl} = useParams();

	fetchUser();

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

	return <Main>{data}</Main>;
}

const Main = styled.main`
	margin: 6.5em 0 8em 0;
`;
