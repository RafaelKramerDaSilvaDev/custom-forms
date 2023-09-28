import styled from 'styled-components';

export function TopBar({ children }: { children: React.ReactNode }) {
	return <TopBarContainer>{children}</TopBarContainer>;
}

const TopBarContainer = styled.div`
	grid-area: top-bar;

	background-color: ${({ theme }) => theme.colors.grey};
	height: 60px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
`;
