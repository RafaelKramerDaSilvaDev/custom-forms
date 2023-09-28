import styled from 'styled-components';

export const PreviewFormContainer = styled.div`
	grid-area: preview;

	padding: ${({ theme }) => theme.padding.large};
	border-width: 1px;
	border-radius: 8px;
	margin: 24px;
`;
