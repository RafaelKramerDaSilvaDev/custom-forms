import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { NewInputContainer, Title } from './styles';

const schema = object({
	name: string().required('Campo Nome é Obrigatório'),
	label: string().required('Campo Label é Obrigatório'),
	type: string().required('Campo Tipo de Dado é Obrigatório'),
	text: string().required('Campo Texto é Obrigatório'),
	requirement: string().required('Campo Requisito é Obrigatório'),
}).required();

export function NewInputForm() {
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

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<NewInputContainer>
				<Title>Criar Nova Entrada</Title>
				<Stack>
					<FormControl isRequired isInvalid={Boolean(errors.name)}>
						<FormLabel>Nome</FormLabel>
						<Input type='text' placeholder='Digite o nome da entrada' {...register('name')} />
						{errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.label)}>
						<FormLabel>Label</FormLabel>
						<Input type='text' placeholder='Digite o nome da label' {...register('label')} />
						{errors.label && <FormErrorMessage>{errors.label.message}</FormErrorMessage>}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.type)}>
						<FormLabel>Tipo de Dado</FormLabel>
						<Select placeholder='Selecione o tipo de dado da entrada' {...register('type')}>
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
						{errors.type && <FormErrorMessage>{errors.type.message}</FormErrorMessage>}
					</FormControl>
					<FormControl isRequired isInvalid={Boolean(errors.requirement)}>
						<FormLabel>Requisito</FormLabel>
						<Select placeholder='Selecione o requisito da entrada' {...register('requirement')}>
							<option value='option1'>Obrigatório</option>
							<option value='option2'>Opcional</option>
						</Select>
						{errors.requirement && <FormErrorMessage>{errors.requirement.message}</FormErrorMessage>}
					</FormControl>
					<Button type='submit' colorScheme='blue'>
						Adicionar Entrada
					</Button>
				</Stack>
			</NewInputContainer>
		</form>
	);
}
