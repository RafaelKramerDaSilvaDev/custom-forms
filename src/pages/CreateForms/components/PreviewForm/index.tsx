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
						const properties = item.inputPropertiesTypes;
						return (
							<NewInput
								key={properties.id}
								inputDataTypes={item.inputDataTypes}
								inputPropertiesTypes={item.inputPropertiesTypes}
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
