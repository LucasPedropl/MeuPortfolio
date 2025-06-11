import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	padding: 2vh;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgb(14, 14, 14);
	padding-left: 10vw;
	padding-right: 10vw;
`;

export const AreaLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Logo = styled.img`
	height: 8vh;
	width: 4vw;
`;

export const AreaDireita = styled.div`
	display: flex;
	gap: 60px;
`

export const AreaMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const AreaSocial = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	a{
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

export const AreaConfig = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	img {
		cursor: pointer;
		width: 30px;
		user-select: none;
	}
`;
