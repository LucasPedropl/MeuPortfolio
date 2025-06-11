import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuDiv = styled.div`
	height: 40px;
	padding-left: 0.7rem;
	user-select: none;
`;

export const MenuLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	display: flex;
	align-items: center;
	height: 100%;
	color: ${({ $active }) => ($active ? '#bdbdbd' : 'white')};
	&:hover {
		color: #bdbdbd;
	}
`;
