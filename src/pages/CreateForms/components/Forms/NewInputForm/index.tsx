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
import { v4 as uuidv4 } from 'uuid';
import { InferType, object, string } from 'yup';
import { useCreateForms } from '../../../contexts/CreateFormsContext';
import { DataType } from '../../NewInput/types';
import { Container, Description, Title } from '../styles';
import { InputDataTypeOptions } from './constants';
import { InputDataType } from './types';
import { getFormHelperText } from './utils/getFormHelperText';
import { getPlaceholder } from './utils/getPlaceholder';

const schema = object({
	dataType: string().required('Campo Tipo de Dado é Obrigatório'),
	name: string().required('Campo Nome é Obrigatório'),
	label: string().required('Campo Label é Obrigatório'),
	placeholder: string().required('Campo Dica é Obrigatório'),
	isRequired: string().oneOf(['Obrigatório', 'Opcional']).required('Campo Requisito é Obrigatório'),
	formHelperText: string(),
	initialValue: string(),
});

export function NewInputForm() {
	const { setForms } = useCreateForms();
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
		setForms((prev) => [
			...prev,
			{
				type: 'input',
				data: {
					id: uuidv4(),
					dataType: data.dataType as DataType,
					name: data.name,
					label: data.label,
					placeholder: data.placeholder,
					isRequired: data.isRequired === 'Obrigatório' ? true : false,
					initialValue: data.initialValue,
				},
			},
		]);
	};

	const watchDataType = watch('dataType') as InputDataType;

	useEffect(() => {
		const newPlaceholder = watchDataType && `${getPlaceholder(watchDataType)}`;
		const newFormHelperText = watchDataType && `${getFormHelperText(watchDataType)}`;
		const formattedValue = InputDataTypeOptions[watchDataType];

		setValue('placeholder', newPlaceholder);
		setValue('formHelperText', newFormHelperText);
		setValue('name', formattedValue);
		setValue('label', formattedValue);
	}, [watchDataType]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Container>
				<Title>
					Criar Novo: <span>Campo De Entrada</span>
				</Title>
				<Description>
					O <span>Campo de Entrada</span> serve para inserção de informações, como texto, número, data de nascimento,
					endereço, entre outros.
				</Description>
				<Stack>
					<FormControl isRequired isInvalid={Boolean(errors.dataType)}>
						<FormLabel>Tipo de Dado</FormLabel>
						<Select placeholder='Selecione o tipo de dado da entrada' {...register('dataType')}>
							{Object.entries(InputDataTypeOptions).map(([key, value]) => (
								<option key={key} value={key}>
									{value}
								</option>
							))}
						</Select>
						{errors.dataType ? (
							<FormErrorMessage>{errors.dataType.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								Defina o tipo de dado aceito pelo Campo De Entrada. Se um tipo diferente for inserido no formulário, ele
								exibirá um erro e impedirá a continuação.
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.isRequired)}>
						<FormLabel>Requisito</FormLabel>
						<Select placeholder='Selecione o requisito da entrada' {...register('isRequired')}>
							<option>Obrigatório</option>
							<option>Opcional</option>
						</Select>
						{errors.isRequired ? (
							<FormErrorMessage>{errors.isRequired.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina se esse é um Campo de Entrada obrigatório ou opcional.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.placeholder)}>
						<FormLabel>Dica</FormLabel>
						<Input type='text' placeholder='Digite o nome da entrada' {...register('placeholder')} />
						{errors.placeholder ? (
							<FormErrorMessage>{errors.placeholder.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								A Dica, também conhecido como placeholder, serve como uma dica ou sugestão sobre o que o usuário deve
								inserir naquele Campo de Entrada. Esse texto é exibido dentro do campo e desaparece assim que o usuário
								começa a digitar.
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.label)}>
						<FormLabel>Label</FormLabel>
						<Input type='text' placeholder='Digite o nome da label' {...register('label')} />
						{errors.label ? (
							<FormErrorMessage>{errors.label.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								A Label é o texto exibido acima do Campo de Entrada para identificar o campo.
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={Boolean(errors.formHelperText)}>
						<FormLabel>Mensagem Auxiliar</FormLabel>
						<Input placeholder='Selecione o requisito da entrada' {...register('formHelperText')} />
						{errors.formHelperText ? (
							<FormErrorMessage>{errors.formHelperText.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								Mensagem exibida abaixo do Campo de Entrada para guiar o usuário sobre sua finalidade ou preenchimento.
							</FormHelperText>
						)}
					</FormControl>
					<FormControl isInvalid={Boolean(errors.initialValue)}>
						<FormLabel>Valor Inicial</FormLabel>
						<Input placeholder='Digite o valor inicial' {...register('initialValue')} />
						{errors.initialValue ? (
							<FormErrorMessage>{errors.initialValue.message}</FormErrorMessage>
						) : (
							<FormHelperText>Se desejar, o campo pode ser inicializado com um valor.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.name)}>
						<FormLabel>Nome</FormLabel>
						<Input type='text' placeholder='Digite o nome da entrada' {...register('name')} />
						{errors.name ? (
							<FormErrorMessage>{errors.name.message}</FormErrorMessage>
						) : (
							<FormHelperText>O nome serve apenas como identificador do Campo De Entrada.</FormHelperText>
						)}
					</FormControl>
					<Button type='submit' colorScheme='blue'>
						Adicionar Campo Entrada
					</Button>
				</Stack>
			</Container>
		</form>
	);
}
