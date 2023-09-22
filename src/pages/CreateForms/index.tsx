import { MainTemplate } from '../../app/templates/MainTemplate';
import { BuildForm } from './components/BuildForm';
import { PreviewForm } from './components/PreviewForm';
import { CreateFormsProvider } from './contexts/CreateFormsContext';
import { CreateFormsContainer } from './styles';

export function CreateForms() {
	return (
		<CreateFormsProvider>
			<MainTemplate>
				<CreateFormsContainer>
					<BuildForm />
					<PreviewForm />
				</CreateFormsContainer>
			</MainTemplate>
		</CreateFormsProvider>
	);
}
