import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuDiv = styled.div`
	height: 40px;
	padding-left: 0.7rem;
	user-select: none;
	width: 100%;
	@media (max-width: 1250px) {
		padding-left: 0;
	}
`;

export const MenuLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	display: flex;
	align-items: center;
	height: 100%;
	color: ${({ $active }) => ($active ? '#bdbdbd' : 'white')};
	white-space: nowrap;
	&:hover {
		color: #bdbdbd;
	}
	@media (max-width: 1250px) {
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;
