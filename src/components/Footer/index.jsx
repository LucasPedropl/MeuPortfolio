import { Container, Copyright, AreaSocial } from './StyledComponents';

const Footer = () => {
	const linkedin = 'https://www.linkedin.com/in/pedro-lucas-silva-mota-769a70267/';
	const instagram = 'https://www.instagram.com/lucaspedropl_/#';
	const github = 'https://github.com/LucasPedropl';
	return (
		<Container>
			<AreaSocial>
				<a href={linkedin} target="_blank" rel="noopener noreferrer">
					<i className="bi bi-linkedin" />
				</a>
				<a href={instagram} target="_blank" rel="noopener noreferrer">
					<i className="bi bi-instagram" />
				</a>
				<a href={github} target="_blank" rel="noopener noreferrer">
					<i className="bi bi-github" />
				</a>
			</AreaSocial>
			<Copyright>© 2025 All rights reserved | Made by Pedro Lucas Mota</Copyright>
		</Container>
	);
};

export default Footer;
