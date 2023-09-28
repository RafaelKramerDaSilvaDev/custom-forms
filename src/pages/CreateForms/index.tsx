import { MainTemplate } from '../../app/templates/MainTemplate';
import { Forms } from './components/Forms';
import { PreviewForm } from './components/PreviewForm';
import { SettingsBar } from './components/SettingsBar';
import { CreateFormsProvider } from './contexts/CreateFormsContext';
import { CreateFormsContainer } from './styles';

export function CreateForms() {
	return (
		<CreateFormsProvider>
			<MainTemplate>
				<SettingsBar />
				<CreateFormsContainer>
					<Forms />
					<PreviewForm />
				</CreateFormsContainer>
			</MainTemplate>
		</CreateFormsProvider>
	);
}
