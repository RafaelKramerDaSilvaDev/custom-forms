import styled from 'styled-components';
import { headerHeight } from '../../styles';

export const ContentContainer = styled.div`
	grid-area: content;

	display: grid;
	grid-template-areas:
		'top-bar'
		'content';
	grid-template-rows: 60px auto;
	background-color: ${({ theme }) => theme.colors.white};
	height: calc(100vh - ${headerHeight});
	overflow: auto;
`;
