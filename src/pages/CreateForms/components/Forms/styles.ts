import styled from 'styled-components';

export const BuildFormContainer = styled.div`
	grid-area: build;

	padding: ${({ theme }) => theme.padding.large};
	border-width: 1px;
	border-radius: 8px;
	margin: 24px;
`;

export const Title = styled.h1`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 20px;
	text-transform: uppercase;

	span {
		font-weight: 700;
	}
`;

export const Description = styled.p`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 20px;

	span {
		font-weight: 700;
	}
`;

export const Container = styled.div``;
