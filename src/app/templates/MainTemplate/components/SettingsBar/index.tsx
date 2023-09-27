import { Button } from '@chakra-ui/react';
import { useCreateForms } from '../../../../../pages/CreateForms/contexts/CreateFormsContext';
import { Instruction, SettingsBarContainer } from './styles';
import { OptionSettingsBar } from './types';

export function SettingsBar() {
	const { setOptionSettingsBar } = useCreateForms();

	function handleSetOption(option: OptionSettingsBar) {
		setOptionSettingsBar(option);
	}

	return (
		<SettingsBarContainer>
			<Instruction>Selecione o Componente:</Instruction>
			<Button variant='link' colorScheme='black' onClick={() => handleSetOption('input')} textTransform='uppercase'>
				Campo de Entrada
			</Button>
			<Button variant='link' colorScheme='black' onClick={() => handleSetOption('button')} textTransform='uppercase'>
				Botão
			</Button>
		</SettingsBarContainer>
	);
}
