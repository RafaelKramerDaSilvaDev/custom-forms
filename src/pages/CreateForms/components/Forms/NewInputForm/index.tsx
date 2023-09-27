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
import { COMBOBOX_OPTIONS, DEFAULT_LABELS } from '../../../constants';
import { useCreateForms } from '../../../contexts/CreateFormsContext';
import { DataType } from '../../../enums/DataType';
import { getFormHelperText } from '../../../helpers/getFormHelperText';
import { getPlaceholders } from '../../../helpers/getPlaceholders';
import { InputDataType } from '../../../types/InputDataType';
import { checkPlaceholderExistence } from '../../../validators/checkPlaceholderExistence';
import { Container } from '../styles';

const schema = object({
	dataType: string().required('Campo Tipo de Dado é Obrigatório'),
	label: string().required('Campo Label é Obrigatório'),
	placeholder: string().required('Campo Placeholder é Obrigatório'),
	isRequired: string().oneOf(['Obrigatório', 'Opcional']).required('Campo Requisito é Obrigatório'),
	formHelperText: string(),
	initialValue: string(),
});

export function NewInputForm() {
	const [placeholderExistence, setPlaceholderExistence] = useState(false);
	const [isLabelModified, setIsLabelModified] = useState(false);

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
					label: data.label,
					placeholder: data.placeholder,
					isRequired: data.isRequired === 'Obrigatório' ? true : false,
					initialValue: data.initialValue,
				},
			},
		]);
	};

	const watchDataType = watch('dataType') as InputDataType;
	const watchLabel = watch('label');

	useEffect(() => {
		let placeholder;
		let formHelperText;

		if (watchDataType) {
			if (!isLabelModified) {
				const defaultLabel = DEFAULT_LABELS[watchDataType];
				setValue('label', defaultLabel || '');
			}

			placeholder = getPlaceholders(watchDataType, null);
			formHelperText = getFormHelperText(watchDataType, null);

			setIsLabelModified(false);
		}

		if (isLabelModified && watchLabel) {
			placeholder = getPlaceholders(null, watchLabel);
			formHelperText = getFormHelperText(null, watchLabel);
		}

		setValue('placeholder', placeholder || '');
		setValue('formHelperText', formHelperText || '');

		setPlaceholderExistence(checkPlaceholderExistence(watchDataType));
	}, [watchLabel, watchDataType]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Container>
				<Stack>
					<FormControl isRequired isInvalid={Boolean(errors.dataType)}>
						<FormLabel>Tipo de Dado</FormLabel>
						<Select defaultValue='Texto' {...register('dataType')}>
							{Object.entries(COMBOBOX_OPTIONS).map(([key, value]) => (
								<option key={key} value={key}>
									{value}
								</option>
							))}
						</Select>
						{errors.dataType ? (
							<FormErrorMessage>{errors.dataType.message}</FormErrorMessage>
						) : (
							<FormHelperText>Defina o tipo de dado aceito pelo campo.</FormHelperText>
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
							<FormHelperText>Defina se esse campo é obrigatório ou opcional.</FormHelperText>
						)}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.label)}>
						<FormLabel>Nome do Campo</FormLabel>
						<Input
							type='text'
							placeholder='Digite o nome do campo'
							{...register('label')}
							onChange={(e) => {
								setIsLabelModified(true);
								register('label').onChange(e);
							}}
						/>
						{errors.label ? (
							<FormErrorMessage>{errors.label.message}</FormErrorMessage>
						) : (
							<FormHelperText>É o nome dado a um campo de formulário.</FormHelperText>
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
									Indica o que inserir em um campo de entrada. Ele mostra uma dica no campo e some ao começar a digitar.
								</FormHelperText>
							)}
						</FormControl>
					)}
					<FormControl isInvalid={Boolean(errors.formHelperText)}>
						<FormLabel>Mensagem Auxiliar</FormLabel>
						<Input placeholder='Selecione o requisito da entrada' {...register('formHelperText')} />
						{errors.formHelperText ? (
							<FormErrorMessage>{errors.formHelperText.message}</FormErrorMessage>
						) : (
							<FormHelperText>
								Mensagem exibida abaixo do campo para guiar o usuário sobre sua finalidade ou preenchimento.
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
