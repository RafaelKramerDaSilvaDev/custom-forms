import { Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { NewInputContainer, Title } from './styles';

const schema = object({
	functionality: string().required('Campo Funcionalidade do Botão é Obrigatório'),
	text: string().required('Campo Texto do Botão é Obrigatório'),
}).required();

export function NewInputForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	type FormData = InferType<typeof schema>;

	const onSubmit = (data: FormData) => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<NewInputContainer>
				<Title>Entrada</Title>
				<Stack>
					<FormControl isRequired>
						<FormLabel>Nome</FormLabel>
						<Input type='text' placeholder='Digite o nome da entrada' />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Label</FormLabel>
						<Input type='text' placeholder='Digite o nome da label' />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Tipo de Dado</FormLabel>
						<Select placeholder='Selecione o tipo de dado da entrada'>
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
						<Select placeholder='Selecione o requisito da entrada'>
							<option value='option1'>Obrigatório</option>
							<option value='option2'>Opcional</option>
						</Select>
					</FormControl>
					<Button colorScheme='blue'>Adicionar Entrada</Button>
				</Stack>
			</NewInputContainer>
		</form>
	);
}
