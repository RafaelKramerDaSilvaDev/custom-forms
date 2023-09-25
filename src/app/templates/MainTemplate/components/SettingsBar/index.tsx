import { Button } from '@chakra-ui/react';
import { useCreateForms } from '../../../../../pages/CreateForms/contexts/CreateFormsContext';
import { Instruction, SettingsBarContainer } from './styles';
import { OptionSettingsBar } from '../../../../../pages/CreateForms/types/OptionSettingsBar';

export function SettingsBar() {
	const { setOptionSettingsBar } = useCreateForms();

	function handleSetOption(option: OptionSettingsBar) {
		setOptionSettingsBar(option);
	}

	return (
		<SettingsBarContainer>
			<Instruction>Selecione o Elemento:</Instruction>
			<Button variant='link' colorScheme='black' onClick={() => handleSetOption('input')}>
				Entrada
			</Button>
			<Button variant='link' colorScheme='black' onClick={() => handleSetOption('button')}>
				Botão
			</Button>
		</SettingsBarContainer>
	);
}
