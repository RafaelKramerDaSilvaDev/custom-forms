import styled from 'styled-components';

export const OptionStylized = styled.div`
	width: 100%;
	margin-top: -1px;

	font-weight: 500;
	border-style: solid;
	border-width: 1px;
	border-color: rgb(229, 229, 229);

	height: 42px;
	padding: 8px 16px;
	transition: all 0.2s;
	cursor: pointer;

	user-select: none;

	&&:hover {
		background-color: rgb(229, 229, 229);
	}

	&&:active {
		background-color: white;
	}
`;
