import { Button } from '@chakra-ui/react';
import { useCreateForms } from '../../../../../pages/CreateForms/contexts/CreateFormsContext';
import { Instruction, SettingsBarContainer } from './styles';

export function SettingsBar() {
	const { setOptionSettingsBar } = useCreateForms();

	function handleSetOption(option: string) {
		setOptionSettingsBar(option);
	}

	return (
		<SettingsBarContainer>
			<Instruction>Selecione o Elemento:</Instruction>
			<Button variant='link' colorScheme='black' onClick={() => handleSetOption('field')}>
				Campo
			</Button>
			<Button variant='link' colorScheme='black' onClick={() => handleSetOption('button')}>
				Botão
			</Button>
		</SettingsBarContainer>
	);
}
