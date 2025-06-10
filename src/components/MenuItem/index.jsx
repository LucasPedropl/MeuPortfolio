import { useLocation } from 'react-router-dom';
import { MenuDiv, MenuLink, MenuCategoria } from './StyledComponents';

const MenuItem = ({ children, url }) => {
	const location = useLocation();
	const isActive = url ? location.pathname === url : false;

	return (
		<MenuDiv $active={isActive}>
			<MenuLink to={url} $active={isActive}>
				{children}
			</MenuLink>
		</MenuDiv>
	);
};

export default MenuItem;
