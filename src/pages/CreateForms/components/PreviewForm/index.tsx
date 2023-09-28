import { Stack } from '@chakra-ui/react';
import { useCreateForms } from '../../contexts/CreateFormsContext';
import { NewButton } from '../NewButton';
import { NewInput } from '../NewInput';
import { PreviewFormContainer } from './styles';

export function PreviewForm() {
	const { forms } = useCreateForms();

	return (
		<PreviewFormContainer>
			<Stack>
				{forms.map((item, index) => {
					if (item.type === 'input') {
						const inputData = item.data;
						return (
							<NewInput
								key={inputData.id}
								id={inputData.id}
								label={inputData.label}
								dataType={inputData.dataType}
								isRequired={inputData.isRequired}
								placeholder={inputData.placeholder}
								formHelperText={inputData.formHelperText}
								initialValue={inputData.initialValue}
							/>
						);
					} else if (item.type === 'button') {
						const buttonData = item.data;
						return (
							<NewButton
								key={index}
								action={buttonData.action}
								linkAction={buttonData.linkAction}
								linkName={buttonData.linkName}
								name={buttonData.name}
								text={buttonData.text}
							/>
						);
					}
				})}
			</Stack>
		</PreviewFormContainer>
	);
}
