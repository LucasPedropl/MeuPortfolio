import { AreaDescricao, AreaPerfil, Container, Ocupation, Descricao, Perfil } from './StyledComponents';

const Capa = () => {
	return (
		<Container>
			<AreaDescricao>
				<Ocupation>Front-End Developer</Ocupation>
				<Descricao>Front-end developer with React + Typescript</Descricao>
			</AreaDescricao>
			<AreaPerfil>
				<Perfil src='/ladnvs.png' />
			</AreaPerfil>
			<AreaDescricao>
				<Ocupation>Back-End Developer</Ocupation>
				<Descricao>Back-end developer with NodeJS + NextJS</Descricao>
			</AreaDescricao>
		</Container>
	);
};

export default Capa;
