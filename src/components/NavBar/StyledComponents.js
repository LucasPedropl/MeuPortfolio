import styled from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	padding: 2vh;
	width: 100vw;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgb(14, 14, 14);
	padding-left: 20vw;
	padding-right: 20vw;
	position: relative;
	user-select: none;
	@media (max-width: 1920px) {
		padding-left: 12vw;
		padding-right: 12vw;
	}
	@media (max-width: 1250px) {
		padding-left: 5vw;
		padding-right: 5vw;
	}
`;

export const AreaLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Logo = styled.img`
	cursor: pointer;

	@media (min-width: 1920px) {
		height: 80px;
	}
	@media (max-width: 1920px) {
		height: 50px;
	}
	@media (max-width: 900px) {
		height: 40px;
	}
`;

export const AreaDireita = styled.div`
	display: flex;
	gap: 60px;
	@media (max-width: 1250px) {
		display: none;
	}
`;

export const HamburgerButton = styled.button`
	background: none;
	border: none;
	display: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	i {
		color: white;
		font-size: 2rem;
	}
	@media (max-width: 1250px) {
		display: flex;
		i {
			font-size: 50px;
		}
	}
`;

export const AreaMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	@media (max-width: 1250px) {
		border-top: 5px solid #444;
		border-bottom: 5px solid #444;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		gap: 0;
		& > *:not(:last-child) {
			border-bottom: 1px solid #444;
			width: 100%;
		}
	}
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
	@media (max-width: 1250px) {
		width: 100%;
		align-items: center;
		justify-content: center;
		border-top: 5px solid #444;
		border-bottom: 5px solid #444;
		padding-top: 1rem;
		padding-bottom: 1rem;
		i {
			font-size: 30px;
			font-size: 20px;
		}
	}
`;

export const AreaConfig = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	img {
		cursor: pointer;
		width: 40px;
		height: 30px;
		object-fit: contain;
		margin: 0;
		padding: 0;
	}
	@media (max-width: 1250px) {
		width: 100%;
		justify-content: flex-start;
	}
`;
