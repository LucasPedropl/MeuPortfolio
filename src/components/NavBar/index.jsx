import { AreaLogo, Container, Logo, AreaMenu } from './StyledComponents';
import logo from '../../../public/icone-site.png'
import MenuItem from '../MenuItem';

const NavBar = () => {
	return (
		<Container>
			<AreaLogo>
				<Logo src={logo} />
			</AreaLogo>
			<AreaMenu>
				<MenuItem url="/">HOME</MenuItem>
			</AreaMenu>
		</Container>
	);
};

export default NavBar;
