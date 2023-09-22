import styled from 'styled-components';

export const ContentContainer = styled.div`
	grid-area: content;

	display: grid;
	grid-template-areas:
		'settings-bar'
		'content';
	grid-template-rows: 60px auto;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentStylized = styled.div`
	grid-area: content;
`;
