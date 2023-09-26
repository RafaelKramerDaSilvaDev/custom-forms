import { useCreateForms } from '../../contexts/CreateFormsContext';
import { NewButtonForm } from './NewButtonForm';
import { NewInputForm } from './NewInputForm';
import { BuildFormContainer } from './styles';

export function Forms() {
	const { optionSettingsBar } = useCreateForms();

	return (
		<BuildFormContainer>
			{optionSettingsBar === 'input' && <NewInputForm />}
			{optionSettingsBar === 'button' && <NewButtonForm />}
		</BuildFormContainer>
	);
}
