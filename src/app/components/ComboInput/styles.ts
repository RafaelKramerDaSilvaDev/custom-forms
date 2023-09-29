import styled from 'styled-components';

export const Container = styled.div``;

export const Structure = styled.div`
	display: flex;
`;

export const Combo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	border-style: solid;
	border-width: 1px;
	border-color: rgb(229, 229, 229);
	border-radius: 2px 0 0 0;
	width: 50px;

	cursor: pointer;
	user-select: none;

	&&:hover {
		background-color: rgb(229, 229, 229);
	}

	&&:active {
		background-color: white;
	}
`;

export const OptionsBox = styled.div`
	z-index: 1;
	position: absolute;
	background-color: white;
	width: 100%;
	max-height: 200px;
	overflow-y: auto;

	border-style: solid;
	border-width: 0 1px 1px 0;
	border-color: rgb(229, 229, 229);
	border-left: none;
	border-radius: 0 0 2px 2px;
`;
