import { AreaLogo, Container, Logo, AreaMenu, AreaSocial, AreaConfig, AreaDireita, HamburgerButton } from './StyledComponents';
import logo from '../../../public/icone-site.png';
import MenuItem from './MenuItem';
import FlagEua from '../../../public/FlagEua.png';
import FlagBr from '../../../public/FlagBR.png';
import SwitchTheme from './Switch';
import MobileMenu from './MobileMenuWrapper';
import { useState } from 'react';

const NavBar = () => {
	const [dark, setDark] = useState(false);
	const [isBr, setIsBr] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleToggle = () => setDark((prev) => !prev);
	const handleFlagClick = () => setIsBr((prev) => !prev);
	const handleMenuToggle = () => setMenuOpen((prev) => !prev);

	const linkedin = 'https://www.linkedin.com/in/pedro-lucas-silva-mota-769a70267/';
	const instagram = 'https://www.instagram.com/lucaspedropl_/#';
	const github = 'https://github.com/LucasPedropl';

	return (
		<Container>
			<AreaLogo>
				<Logo src={logo} />
			</AreaLogo>
			<HamburgerButton onClick={handleMenuToggle}>
				<i className="bi bi-list" />
			</HamburgerButton>
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
					<img src={isBr ? FlagBr : FlagEua} onClick={handleFlagClick} />
					<SwitchTheme dark={dark} onToggle={handleToggle} />
				</AreaConfig>
			</AreaDireita>
			<MobileMenu menuOpen={menuOpen} dark={dark} isBr={isBr} handleToggle={handleToggle} handleFlagClick={handleFlagClick} linkedin={linkedin} instagram={instagram} github={github} handleMenuToggle={handleMenuToggle} />
		</Container>
	);
};

export default NavBar;
