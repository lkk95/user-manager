import styled from 'styled-components';

export default function HeaderHome({title}) {
	return (
		<HeaderContainer>
			<h1>{title}</h1>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	height: 6em;
	width: 50%;
	position: fixed;
	top: 0;
	font-weight: bold;
	border-bottom: solid 0.1em black;
	text-align: center;
	background-color: white;
`;
