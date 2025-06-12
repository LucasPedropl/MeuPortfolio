import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
	display: none;
	align-items: center;
	opacity: 0;
	transform: translateY(-20px);
	pointer-events: none;
	transition: opacity 0.9s ease, transform 0.9s ease;
	@media (max-width: 1250px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: #232323;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100vw;
		padding: 1rem 10vw;
		gap: 0;
		z-index: 10;
		padding-bottom: 2rem;
		&.active {
			opacity: 1;
			transform: translateY(0);
			pointer-events: auto;
		}
	}
`;

export const MobileConfigWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin-top: 1rem;
	margin-bottom: 1rem;
	div {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}
	img {
		height: 35px;
		object-fit: contain;
		@media (max-width: 900px) {
			height: 30px;
		}
	}
`;

export const MobileConfigLabel = styled.span`
	color: #bdbdbd;
	font-size: 1rem;
`;

export const MobileBottomRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`;