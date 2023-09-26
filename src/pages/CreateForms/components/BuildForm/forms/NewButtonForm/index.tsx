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
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { Container, Description, Title } from '../../styles';
import { useCreateForms } from '../../../../contexts/CreateFormsContext';
import { ButtonAction } from '../../../NewButton/types';
import { convertToButtonAction } from './convertToButtonAction';

const schema = object({
	action: string().required('Campo Funcionalidade é Obrigatório.'),
	linkAction: string().required('Campo Vincular Funcionalidade é Obrigatório.'),
	text: string().required('Campo Texto é Obrigatório.'),
	name: string().required('Campo Nome é Obrigatório.'),
	linkName: string().required('Campo Nome da Vinculação é Obrigatório.'),
}).required();

export function NewButtonForm() {
	const { setNewButtons } = useCreateForms();

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

	const onSubmit = (data: FormData) => {
		const actionValue: ButtonAction = convertToButtonAction(data.action);

		setNewButtons((prev) => [
			...prev,
			{
				action: actionValue,
				linkAction: data.linkAction,
				text: data.text,
				name: data.name,
				linkName: data.linkName,
			},
		]);
	};

	const watchaction = watch('action');

	useEffect(() => {
		setValue('name', watchaction);
		setValue('text', watchaction);
	}, [watchaction]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Container>
				<Title>
					Criar Novo: <span>Botão</span>
				</Title>
				<Description>
					O <span>Botão</span> é um elemento clicável que executa uma ação específica, como enviar informações ou abrir
					um menu.
				</Description>
				<Stack>
					<FormControl isRequired isInvalid={Boolean(errors.action)}>
						<FormLabel>Ação</FormLabel>
						<Select placeholder='Selecione a ação' {...register('action')}>
							<option>Salvar</option>
							<option>Salvar e Sair</option>
							<option>Salvar e Novo</option>
							<option>Cancelar</option>
							<option>Limpar Campo</option>
							<option>Limpar Todos os Campos</option>
						</Select>
						{errors.action ? (
							<FormErrorMessage>{errors.action.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina qual funcionalidade vai atribuir ao Botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.text)}>
						<FormLabel>Vincular Funcionalidade</FormLabel>
						<Select placeholder='Selecione a funcionalidade para vincular' {...register('linkAction')}>
							<option>Nome do Produto "isso é o input cadastrado pelo usuário"</option>
						</Select>
						{errors.linkAction ? (
							<FormErrorMessage>{errors.linkAction.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina ao que vai vincular a funcionalidade do Botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.text)}>
						<FormLabel>Texto</FormLabel>
						<Input type='text' placeholder='Digite o texto' {...register('text')} />
						{errors.text ? (
							<FormErrorMessage>{errors.text.message}</FormErrorMessage>
						) : (
							<FormHelperText>Texto que aparece no Botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.name)}>
						<FormLabel>Nome</FormLabel>
						<Input type='text' placeholder='Digite o nome' {...register('name')} />
						{errors.name ? (
							<FormErrorMessage>{errors.name.message}</FormErrorMessage>
						) : (
							<FormHelperText>O nome serve apenas como identificador do Botão.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.linkName)}>
						<FormLabel>Nome da Vinculação</FormLabel>
						<Input type='text' placeholder='Digite o nome da vinculação' {...register('linkName')} />
						{errors.linkName ? (
							<FormErrorMessage>{errors.linkName.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								O nome da vinculação serve apenas como identificador da vinculação do Botão e sua funcionalidade.
							</FormHelperText>
						)}
					</FormControl>
					<Button type='submit' colorScheme='blue'>
						Adicionar Botão
					</Button>
				</Stack>
			</Container>
		</form>
	);
}
