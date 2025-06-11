import { AreaLogo, Container, Logo, AreaMenu, AreaSocial, AreaConfig, AreaDireita } from './StyledComponents';
import logo from '../../../public/icone-site.png';
import MenuItem from '../MenuItem';
import FlagEua from '../../../public/FlagEua.png';
import FlagBr from '../../../public/FlagBR.png';
import SwitchTheme from './Switch';
import React, { useState } from 'react';

const NavBar = () => {
	const [dark, setDark] = useState(true);
	const [isBr, setIsBr] = useState(true); // estado para controlar a bandeira

	const handleToggle = () => setDark((prev) => !prev);
	const handleFlagClick = () => setIsBr((prev) => !prev); // alterna a bandeira

	const linkedin = 'https://www.linkedin.com/in/pedro-lucas-silva-mota-769a70267/';
	const instagram = 'https://www.instagram.com/lucaspedropl_/#';
	const github = 'https://github.com/LucasPedropl';
	return (
		<Container>
			<AreaLogo>
				<Logo src={logo} />
			</AreaLogo>
			<AreaDireita>
				<AreaMenu>
					<MenuItem url="/">Home</MenuItem>
					<MenuItem url="/About">About Me</MenuItem>
					<MenuItem url="/Contact">Contact</MenuItem>
					<MenuItem url="/Projects">Projects</MenuItem>
				</AreaMenu>
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
				<AreaConfig>
					<img src={isBr ? FlagBr : FlagEua} alt={isBr ? 'Bandeira do Brasil' : 'Bandeira dos EUA'} onClick={handleFlagClick} style={{ cursor: 'pointer' }} />
					<SwitchTheme dark={dark} onToggle={handleToggle} />
				</AreaConfig>
			</AreaDireita>
		</Container>
	);
};

export default NavBar;
