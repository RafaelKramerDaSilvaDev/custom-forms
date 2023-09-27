import styled from 'styled-components';

export const MainTemplateStylized = styled.div`
	display: grid;
	grid-template-areas:
		'header header'
		'aside content';
	grid-template-rows: 100px auto;
	grid-template-columns: 240px auto;
	height: 100vh;
`;
