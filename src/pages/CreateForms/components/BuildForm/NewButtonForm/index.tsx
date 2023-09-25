import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { NewButtonContainer, Title } from './styles';

const schema = object({
	name: string().required('Campo Nome é Obrigatório'),
	functionality: string().required('Campo Funcionalidade é Obrigatório'),
	text: string().required('Campo Texto é Obrigatório'),
}).required();

export function NewButtonForm() {
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
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<NewButtonContainer>
				<Title>Criar Novo Botão</Title>
				<Stack>
					<FormControl isRequired isInvalid={Boolean(errors.text)}>
						<FormLabel>Nome</FormLabel>
						<Input type='text' placeholder='Digite o nome' {...register('text')} />
						{errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.functionality)}>
						<FormLabel>Funcionalidade</FormLabel>
						<Select placeholder='Selecione a funcionalidade' {...register('functionality')}>
							<option>Salvar</option>
							<option>Salvar e Sair</option>
							<option>Salvar e Novo</option>
							<option>Cancelar (Sai do Formulário)</option>
							<option>Limpar Campo</option>
							<option>Limpar Todos os Campos</option>
						</Select>
						{errors.functionality && <FormErrorMessage>{errors.functionality.message}</FormErrorMessage>}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.text)}>
						<FormLabel>Texto</FormLabel>
						<Input type='text' placeholder='Digite o texto' {...register('text')} />
						{errors.text && <FormErrorMessage>{errors.text.message}</FormErrorMessage>}
					</FormControl>
					<Button type='submit' colorScheme='blue'>
						Adicionar Botão
					</Button>
				</Stack>
			</NewButtonContainer>
		</form>
	);
}
