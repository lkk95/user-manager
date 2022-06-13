import {useState, useEffect} from 'react';

export default function Createpage() {
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

	return <>{error && <div>An error occured: {error}</div>}</>;
}
