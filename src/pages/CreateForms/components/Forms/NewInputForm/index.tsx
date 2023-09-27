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
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { InferType, object, string } from 'yup';
import { COMBOBOX_OPTIONS_TEXT, DEFAULT_LABELS } from '../../../constants';
import { useCreateForms } from '../../../contexts/CreateFormsContext';
import { DataType } from '../../../enums/DataType';
import { getFormHelperText } from '../../../helpers/getFormHelperText';
import { getPlaceholders } from '../../../helpers/getPlaceholders';
import { InputDataType } from '../../../types/InputDataType';
import { Container, Description, Title } from '../styles';
import { DEFAULT_NAMES } from '../../../constants/DEFAULT_NAMES';
import { checkPlaceholderExistence } from '../../../validators/checkPlaceholderExistence';

const schema = object({
	dataType: string().required('Campo Tipo de Dado é Obrigatório'),
	name: string().required('Campo Nome é Obrigatório'),
	label: string().required('Campo Label é Obrigatório'),
	placeholder: string().required('Campo Placeholder é Obrigatório'),
	isRequired: string().oneOf(['Obrigatório', 'Opcional']).required('Campo Requisito é Obrigatório'),
	formHelperText: string(),
	initialValue: string(),
});

export function NewInputForm() {
	const [nameModified, setNameModified] = useState(false);
	const [placeholderExistence, setPlaceholderExistence] = useState(false);

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
	const watchName = watch('name');

	useEffect(() => {
		const newLabel = DEFAULT_LABELS[watchDataType];
		const newName = DEFAULT_NAMES[watchDataType];

		if (!nameModified) {
			setValue('name', newName);
		}

		if (!watchName || watchName === COMBOBOX_OPTIONS_TEXT[watchDataType]) {
			setValue('label', newLabel);
		} else {
			setValue('label', newLabel);
		}

		let placeholder;
		let formHelperText;

		if (watchDataType) {
			placeholder = getPlaceholders(watchDataType, null);
			formHelperText = getFormHelperText(watchDataType, null);
		}

		if (watchName && watchName !== COMBOBOX_OPTIONS_TEXT[watchDataType]) {
			placeholder = getPlaceholders(null, watchName);
			formHelperText = getFormHelperText(null, watchName);
		}

		setValue('placeholder', placeholder || '');
		setValue('formHelperText', formHelperText || '');

		setPlaceholderExistence(checkPlaceholderExistence(watchDataType));
	}, [watchName, watchDataType]);

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
						<Select defaultValue='Texto' {...register('dataType')}>
							{Object.entries(COMBOBOX_OPTIONS_TEXT).map(([key, value]) => (
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
						<Select defaultValue='Opcional' {...register('isRequired')}>
							<option>Opcional</option>
							<option>Obrigatório</option>
						</Select>
						{errors.isRequired ? (
							<FormErrorMessage>{errors.isRequired.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina se esse é um Campo de Entrada obrigatório ou opcional.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.name)}>
						<FormLabel>Nome do Campo Personalizado</FormLabel>
						<Input
							type='text'
							placeholder='Digite o nome de identificação'
							{...register('name')}
							onChange={(e) => {
								setNameModified(true);
								register('name').onChange(e);
							}}
						/>

						{errors.name ? (
							<FormErrorMessage>{errors.name.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								O Nome de Identificação serve apenas como identificador do Campo De Entrada.
							</FormHelperText>
						)}
					</FormControl>
					{placeholderExistence && (
						<FormControl isRequired isInvalid={Boolean(errors.placeholder)}>
							<FormLabel>Placeholder</FormLabel>
							<Input type='text' placeholder='Digite o placeholder' {...register('placeholder')} />
							{errors.placeholder ? (
								<FormErrorMessage>{errors.placeholder.message}</FormErrorMessage>
							) : (
								<FormHelperText>
									Um placeholder indica o que inserir em um campo de entrada. Ele mostra uma dica no campo e some ao
									começar a digitar.
								</FormHelperText>
							)}
						</FormControl>
					)}
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
					<Button type='submit' colorScheme='blue'>
						Adicionar Campo Entrada
					</Button>
				</Stack>
			</Container>
		</form>
	);
}
