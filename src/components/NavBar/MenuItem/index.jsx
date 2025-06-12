import { useLocation } from 'react-router-dom';
import { MenuDiv, MenuLink } from './StyledComponents';

const MenuItem = ({ children, url, onClick }) => {
	const location = useLocation();
	const isActive = url ? location.pathname === url : false;

	return (
		<MenuDiv $active={isActive} onClick={onClick}>
			<MenuLink to={url} $active={isActive}>
				{children}
			</MenuLink>
		</MenuDiv>
	);
};

export default MenuItem;
