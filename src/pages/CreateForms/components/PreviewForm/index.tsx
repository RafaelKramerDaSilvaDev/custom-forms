import { FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { mockedNewForm } from '../../contexts/mockedValues';
import { NewButton } from '../NewButton';
import { NewInput } from '../NewInput';
import { PreviewFormContainer, Title } from './styles';

export function PreviewForm() {
	return (
		<PreviewFormContainer>
			<Title>Pré-visualização do Formulário</Title>
			{mockedNewForm.map((form, formIndex) => (
				<Stack key={formIndex}>
					{form.input?.map((input) => (
						<FormControl key={input.id}>
							<FormLabel>{input.label}</FormLabel>
							<NewInput
								id={input.id}
								label={input.label}
								dataType={input.dataType} // Deixe a conversão de dataType para tipo de input ser gerenciada internamente por NewInput
								name={input.name}
								placeholder={input.placeholder}
								isRequired={input.isRequired}
								initialValue={input.initialValue}
							/>
						</FormControl>
					))}
					{form.button?.map((button, btnIndex) => (
						<NewButton key={btnIndex} config={button.config} variant={button.variant} />
					))}
				</Stack>
			))}
		</PreviewFormContainer>
	);
}
