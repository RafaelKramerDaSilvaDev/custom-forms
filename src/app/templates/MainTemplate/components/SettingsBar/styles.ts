import styled from 'styled-components';

export const SettingsBarContainer = styled.div`
	grid-area: settings-bar;

	background-color: ${({ theme }) => theme.colors.grey};
	height: 60px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding-left: 20px;
	gap: 20px;
`;
