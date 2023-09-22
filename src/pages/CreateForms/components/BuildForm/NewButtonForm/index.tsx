import { Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { NewButtonContainer, Title } from './styles';

export function NewButtonForm() {
	return (
		<NewButtonContainer>
			<Title>Criar Novo Botão</Title>
			<Stack>
				<FormControl isRequired>
					<FormLabel>Texto do Botão</FormLabel>
					<Input type='text' placeholder='Digite o texto do botão' />
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Funcionalidade do Botão</FormLabel>
					<Select placeholder='Selecione a funcionalidade do botão'>
						<option value='option1'>Salvar</option>
						<option value='option2'>Limpar Campo Acima</option>
						<option value='option1'>Limpar Todos os Campos</option>
					</Select>
				</FormControl>
				<Button colorScheme='blue'>Adicionar Botão</Button>
			</Stack>
		</NewButtonContainer>
	);
}
