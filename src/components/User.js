import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function User({key, name}) {
	const navigate = useNavigate();

	return (
		<UserContainer>
			<h2>{name}</h2>
			<Button onClick={() => navigate('/' + key)}>Details</Button>
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
