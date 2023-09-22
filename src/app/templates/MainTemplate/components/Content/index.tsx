import { SettingsBar } from '../SettingsBar';
import { ContentContainer, ContentStylized } from './styles';

export function Content({ children }: { children: React.ReactNode }) {
	return (
		<ContentContainer>
			<SettingsBar />
			<ContentStylized>{children}</ContentStylized>
		</ContentContainer>
	);
}
