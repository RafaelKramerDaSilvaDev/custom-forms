import { Button } from '@chakra-ui/react';
import { TopBar } from '../../../../app/templates/MainTemplate/components/Content/TopBar';
import { useCreateForms } from '../../contexts/CreateFormsContext';
import { BoxLeft, BoxRight, Instruction } from './styles';

export function SettingsBar() {
	const { setOptionSettingsBar } = useCreateForms();

	return (
		<TopBar>
			<BoxLeft>
				<Instruction>Selecione o Opção:</Instruction>
				<Button variant='link' colorScheme='black' onClick={() => setOptionSettingsBar('input')}>
					Campos de Entrada
				</Button>
				<Button variant='link' colorScheme='black' onClick={() => setOptionSettingsBar('button')}>
					Funcionalidades
				</Button>
			</BoxLeft>
			<BoxRight>
				<Button colorScheme='green'>Salvar</Button>
				<Button colorScheme='red'>Limpar Todos Os Campos</Button>
				<Button colorScheme='red'>Cancelar</Button>
			</BoxRight>
		</TopBar>
	);
}
