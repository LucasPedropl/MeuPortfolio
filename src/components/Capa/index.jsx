import { AreaDescricao, AreaPerfil, Container, Ocupation, Descricao, Perfil } from './StyledComponents';
import perfil from '../../../public/ladnvs.png';

const Capa = () => {
	return (
		<Container>
			<AreaDescricao>
				<Ocupation>Front-End Developer</Ocupation>
				<Descricao>Front-end developer with React + Typescript</Descricao>
			</AreaDescricao>
			<AreaPerfil>
				<Perfil src={perfil} />
			</AreaPerfil>
			<AreaDescricao>
				<Ocupation>Back-End Developer</Ocupation>
				<Descricao>Back-end developer with NodeJS + NextJS</Descricao>
			</AreaDescricao>
		</Container>
	);
};

export default Capa;
