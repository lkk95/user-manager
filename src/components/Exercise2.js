import {useState} from 'react';

export default function Exercise2() {
	const [{data, error}, setData] = useState({data: '', error: null});

	function fetchExercise2(id) {
		fetch(`/api/users/${id}`)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData({
					data: JSON.stringify(data.data, null, 4),
					error: null,
				});
			})
			.catch(error => {
				setData({
					data: '',
					error: error.message,
				});
			});
	}

	return (
		<>
			<h2>Exercise 2</h2>
			<button
				onClick={() => {
					fetchExercise2('62a30afd76d3ae8b3bd46e26');
				}}
			>
				Load example Data from api/users/[id]
			</button>
			{error && <div>An error occured: {error}</div>}
			<pre>{data}</pre>
		</>
	);
}
