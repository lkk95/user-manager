import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function User({id, name, age, email, details}) {
	const navigate = useNavigate();
	const [{data, error}, setData] = useState({data: [], error: null});
	const [isDeleted, setDeleted] = useState(false);

	async function deleteUser(id) {
		fetch(`/api/users/${id}`, {
			method: 'DELETE',
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

	return (
		<UserContainer>
			{details ? (
				isDeleted ? (
					<>
						<p>User successfully deleted!</p>
						<Button onClick={() => navigate('/')}>Go Back</Button>
					</>
				) : (
					<>
						<h2>{name}</h2>
						<p>{age}</p>
						<p>{email}</p>
						<Button onClick={() => navigate('/')}>Go Back</Button>
						<Button
							onClick={() => {
								deleteUser(id);
								setDeleted(!isDeleted);
							}}
						>
							Delete
						</Button>
					</>
				)
			) : (
				<>
					<h2>{name}</h2>
					<Button onClick={() => navigate('/' + id)}>Details</Button>
				</>
			)}
			{error && <div>An error occured: {error}</div>}
		</UserContainer>
	);
}

const UserContainer = styled.section`
	height: 6em;
	width: 35em;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 2em 0 2em 0;
	padding: 1.5em;
	gap: 2em;
	background-color: lightblue;
	border: solid 0 lightblue;
	border-radius: 0.4em;
`;

const Button = styled.button`
	height: 2.5em;
	width: 7em;
	padding: 0.5em;
	background-color: #2e2d4d;
	color: white;
	border: solid 0px #2e2d4d;
	border-radius: 0.3em;
	cursor: pointer;
`;
