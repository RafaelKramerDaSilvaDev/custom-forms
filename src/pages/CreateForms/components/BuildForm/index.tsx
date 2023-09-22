import { useCreateForms } from '../../contexts/CreateFormsContext';
import { NewButtonForm } from './NewButtonForm';
import { NewFieldForm } from './NewFieldForm';
import { BuildFormContainer } from './styles';

export function BuildForm() {
	const { optionSettingsBar } = useCreateForms();

	return (
		<BuildFormContainer>
			{optionSettingsBar === 'field' && <NewFieldForm />}
			{optionSettingsBar === 'button' && <NewButtonForm />}
		</BuildFormContainer>
	);
}
