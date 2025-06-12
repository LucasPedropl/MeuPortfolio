import React from 'react';
import { MobileMenuWrapper, MobileConfigWrapper, MobileConfigLabel } from './StyledComponents';
import MenuItem from '../MenuItem';
import SwitchTheme from '../Switch';
import { AreaMenu, AreaSocial } from '../StyledComponents';

const MobileMenu = ({ menuOpen, dark, isBr, handleToggle, handleFlagClick, linkedin, instagram, github, handleMenuToggle }) => (
	<MobileMenuWrapper className={menuOpen ? 'active' : ''}>
		<AreaMenu>
			<MenuItem url="/" onClick={handleMenuToggle}>
				Home
			</MenuItem>
			<MenuItem url="/About" onClick={handleMenuToggle}>
				About Me
			</MenuItem>
			<MenuItem url="/Contact" onClick={handleMenuToggle}>
				Contact
			</MenuItem>
			<MenuItem url="/Projects" onClick={handleMenuToggle}>
				Projects
			</MenuItem>
		</AreaMenu>
		<MobileConfigWrapper>
			<div onClick={handleToggle}>
				<MobileConfigLabel>Theme</MobileConfigLabel>
				<SwitchTheme dark={dark} onToggle={handleToggle} />
			</div>
			<div onClick={handleFlagClick}>
				<MobileConfigLabel>Language</MobileConfigLabel>
				<img src={isBr ? '/FlagBR.png' : '/FlagEua.png'} />
			</div>
		</MobileConfigWrapper>
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
	</MobileMenuWrapper>
);

export default MobileMenu;
