import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Select,
	Stack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { NewButtonContainer, Title } from './styles';
import { useEffect } from 'react';

const schema = object({
	functionality: string().required('Campo Funcionalidade é Obrigatório.'),
	linkFunctionality: string().required('Campo Vincular Funcionalidade é Obrigatório.'),
	text: string().required('Campo Texto é Obrigatório.'),
	name: string().required('Campo Nome é Obrigatório.'),
	linkName: string().required('Campo Nome da Vinculação é Obrigatório.'),
}).required();

export function NewButtonForm() {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	type FormData = InferType<typeof schema>;

	const onSubmit = (data: FormData) => {};

	const watchFunctionality = watch('functionality');

	useEffect(() => {
		setValue('name', watchFunctionality);
		setValue('text', watchFunctionality);
	}, [watchFunctionality]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<NewButtonContainer>
				<Title>Criar Novo Botão</Title>
				<Stack>
					<FormControl isRequired isInvalid={Boolean(errors.functionality)}>
						<FormLabel>Funcionalidade</FormLabel>
						<Select placeholder='Selecione a funcionalidade' {...register('functionality')}>
							<option>Salvar</option>
							<option>Salvar e Sair</option>
							<option>Salvar e Novo</option>
							<option>Cancelar</option>
							<option>Limpar Campo</option>
							<option>Limpar Todos os Campos</option>
						</Select>
						{errors.functionality ? (
							<FormErrorMessage>{errors.functionality.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina qual funcionalidade vai atribuir ao botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.text)}>
						<FormLabel>Vincular Funcionalidade</FormLabel>
						<Select placeholder='Selecione a funcionalidade para vincular' {...register('linkFunctionality')}>
							<option>Nome do Produto "isso é o input cadastrado pelo usuário"</option>
						</Select>
						{errors.linkFunctionality ? (
							<FormErrorMessage>{errors.linkFunctionality.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina ao que vai vincular a funcionalidade do botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.text)}>
						<FormLabel>Texto</FormLabel>
						<Input type='text' placeholder='Digite o texto' {...register('text')} />
						{errors.text ? (
							<FormErrorMessage>{errors.text.message}</FormErrorMessage>
						) : (
							<FormHelperText>Texto que aparece no botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.name)}>
						<FormLabel>Nome</FormLabel>
						<Input type='text' placeholder='Digite o nome' {...register('name')} />
						{errors.name ? (
							<FormErrorMessage>{errors.name.message}</FormErrorMessage>
						) : (
							<FormHelperText>O nome serve apenas como identificador do botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.linkName)}>
						<FormLabel>Nome da Vinculação</FormLabel>
						<Input type='text' placeholder='Digite o nome da vinculação' {...register('linkName')} />
						{errors.linkName ? (
							<FormErrorMessage>{errors.linkName.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								O nome da vinculação serve apenas como identificador da vinculação do botão e sua funcionalidade.
							</FormHelperText>
						)}
					</FormControl>
					<Button type='submit' colorScheme='blue'>
						Adicionar Botão
					</Button>
				</Stack>
			</NewButtonContainer>
		</form>
	);
}
