import styled from 'styled-components';

export const SwitchWrapper = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 70px;
	height: 32px;
	background: ${({ $dark }) => ($dark ? 'rgb(63, 63, 63)' : '#f1f1f1')};
	border-radius: 32px;
	position: relative;
	transition: background 0.3s;
	box-shadow: 0 2px 8px #0001;

	@media (max-width: 900px) {
		width: 50px;
		height: 24px;
	}
	
`;

export const SwitchInput = styled.input`
	display: none;
`;

export const SwitchSlider = styled.span`
	position: absolute;
	top: 3px;
	left: ${({ $dark }) => ($dark ? '36px' : '3px')};
	width: 26px;
	height: 26px;
	background: ${({ $dark }) => ($dark ? '#181828' : '#fff')};
	border-radius: 50%;
	transition: left 0.3s, background 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	color: ${({ $dark }) => ($dark ? '#fff' : '#23243a')};
	box-shadow: 0 1px 4px #0002;

	@media (max-width: 900px) {
		width: 18px;
		height: 18px;
		top: 3px;
		left: ${({ $dark }) => ($dark ? '26px' : '3px')};
		font-size: 14px;
	}
	

	img {
		width: 100%;
		height: 100%;
	}
`;
