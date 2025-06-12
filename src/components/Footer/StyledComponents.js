import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 4vh;
	width: 100%;
	background-color: black;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const AreaSocial = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	a {
		text-decoration: none;
	}
	i {
		text-decoration: none;
		cursor: pointer;
		color: white;
		font-size: 20px;
		&:hover {
			color: #bdbdbd;
		}
	}
	
`;

export const Copyright = styled.p`
	color: white;
`;