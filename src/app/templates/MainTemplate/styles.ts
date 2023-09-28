import styled from 'styled-components';

export const headerHeight = '80px';
export const asideWidth = '240px';

export const MainTemplateStylized = styled.div`
	display: grid;
	grid-template-areas:
		'header header'
		'aside content';
	grid-template-rows: ${headerHeight} auto;
	grid-template-columns: ${asideWidth} auto;
	height: 100vh;
`;
