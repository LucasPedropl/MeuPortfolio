import styled from "styled-components";

export const Container = styled.div`
	background-color: rgb(105, 105, 105);
    padding-top: 2rem;
    display: flex;
	width: 100%;
	height: 80vh;
    margin-bottom: 5px;
    height: calc(100vh - 85px);
	@media (max-width: 1920px) {
		padding-left: 12vw;
		padding-right: 12vw;
	}
	@media (max-width: 1250px) {
		padding-left: 5vw;
		padding-right: 5vw;
	}
`;

export const AreaDescricao = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: center;
`;

export const Descricao = styled.p`
    color: white;
`

export const Ocupation = styled.h1`
	color: rgb(77, 0, 0);
	white-space: nowrap;
`;

export const AreaPerfil = styled.div`
	width: 50%;
	height: 100%;
    display: flex;
    justify-content: center;
`;

export const Perfil = styled.img`

`

