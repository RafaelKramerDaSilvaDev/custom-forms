import { useCreateForms } from '../../contexts/CreateFormsContext';
import { NewButtonForm } from './forms/NewButtonForm';
import { NewInputForm } from './forms/NewInputForm/NewInputForm';
import { BuildFormContainer } from './styles';

export function BuildForm() {
	const { optionSettingsBar } = useCreateForms();

	return (
		<BuildFormContainer>
			{optionSettingsBar === 'input' && <NewInputForm />}
			{optionSettingsBar === 'button' && <NewButtonForm />}
		</BuildFormContainer>
	);
}
