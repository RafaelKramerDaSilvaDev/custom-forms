import { ContentContainer } from './styles';

type ContentType = {
	children: React.ReactNode;
};

export function Content({ children }: ContentType) {
	return <ContentContainer>{children}</ContentContainer>;
}
