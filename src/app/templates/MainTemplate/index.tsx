import { Aside } from './components/Aside';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { MainTemplateStylized } from './styles';

export function MainTemplate({ children }: { children: React.ReactNode }) {
	return (
		<MainTemplateStylized>
			<Header />
			<Aside />
			<Content>{children}</Content>
		</MainTemplateStylized>
	);
}
