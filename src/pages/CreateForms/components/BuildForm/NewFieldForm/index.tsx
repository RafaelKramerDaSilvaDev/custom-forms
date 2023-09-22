import { Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { NewFieldContainer, Title } from './styles';

export function NewFieldForm() {
	return (
		<NewFieldContainer>
			<Title>Criar Novo Campo</Title>
			<Stack>
				<FormControl isRequired>
					<FormLabel>Nome do Campo</FormLabel>
					<Input type='text' placeholder='Digite o nome do campo' />
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Tipo de Dado</FormLabel>
					<Select placeholder='Selecione o tipo de dado do campo'>
						<option value='option1'>Texto</option>
						<option value='option1'>Texto Longo</option>
						<option value='option2'>Número</option>
						<option value='option2'>CPF</option>
						<option value='option2'>CNPJ</option>
						<option value='option2'>CPF ou CNPJ</option>
						<option value='option2'>Número de Telefone</option>
						<option value='option2'>Data</option>
						<option value='option2'>Hora</option>
						<option value='option2'>E-mail</option>
						<option value='option2'>URL</option>
						<option value='option2'>CEP (Código Postal)</option>
						<option value='option2'>Moeda</option>
						<option value='option2'>Senha</option>
						<option value='option2'>Sim ou Não</option>
						<option value='option2'>Cor</option>
					</Select>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Requisito</FormLabel>
					<Select placeholder='Selecione o requisito do campo'>
						<option value='option1'>Obrigatório</option>
						<option value='option2'>Opcional</option>
					</Select>
				</FormControl>
				<Button colorScheme='blue'>Adicionar Campo</Button>
			</Stack>
		</NewFieldContainer>
	);
}
