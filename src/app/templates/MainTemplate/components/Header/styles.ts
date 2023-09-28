import styled from 'styled-components';

export const HeaderContainer = styled.div`
	grid-area: header;
	background-color: ${({ theme }) => theme.colors.black};

	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 16px;
`;

export const HeaderButton = styled.div`
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;

	cursor: pointer;
	border: solid 2px white;
	padding: 8px 28px;

	transition: 300ms ease-out;
	user-select: none;

	&&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;
