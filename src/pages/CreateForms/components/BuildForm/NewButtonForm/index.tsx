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
						<option>Salvar</option>
						<option>Salvar e Sair</option>
						<option>Salvar e Novo</option>
						<option>Cancelar (Sai do Formulário)</option>
						<option>Limpar Campo Acima</option>
						<option>Limpar Todos os Campos</option>
					</Select>
				</FormControl>
				<Button colorScheme='blue'>Adicionar Botão</Button>
			</Stack>
		</NewButtonContainer>
	);
}
