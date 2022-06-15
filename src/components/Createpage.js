import React, {useState} from 'react';
import styled from 'styled-components';

export default function Createpage({addTask}) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState('');
	const [{data, error}, setData] = useState({data: [], error: null});

	function postUser(data) {
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
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

	const handleSubmit = event => {
		event.preventDefault();
		postUser({name, email, age});
		setName('');
		setEmail('');
		setAge('');
	};

	return (
		<Main>
			<FormContainer onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input id="name" type="text" value={name} onChange={event => setName(event.target.value)} />
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="text"
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>
				<label htmlFor="age">Age:</label>
				<input id="age" type="number" value={age} onChange={event => setAge(event.target.value)} />
				<SubmitButton type="submit" value="Submit" />
			</FormContainer>
		</Main>
	);
}

const Main = styled.main`
	margin: 6.5em 0 8em 0;
`;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;
	font-size: 1.15em;
	margin-bottom: 2em;
	input {
		width: 16em;
		height: 2.5em;
	}
`;

const SubmitButton = styled.input`
	height: 2.5em;
	padding: 0.5em;
	background-color: #2e2d4d;
	color: white;
	border: solid 0px #3f4b3b;
	border-radius: 0.3em;
	cursor: pointer;
`;
