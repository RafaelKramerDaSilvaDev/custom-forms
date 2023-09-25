import { ImCancelCircle } from 'react-icons/im';
import { NewButtonProps, NewFormProps, NewInputProps } from '../types/NewProps';
import { DataType } from '../components/NewInput/dataTypes';

export const mockedNewInputs: NewInputProps[] = [
	{
		id: '1',
		name: 'name',
		label: 'Name',
		placeholder: 'Enter your name',
		isRequired: true,
		initialValue: 'John Doe',
		dataType: DataType.Texto,
	},
	{
		id: '2',
		name: 'email',
		label: 'Email',
		placeholder: 'Enter your email',
		isRequired: false,
		initialValue: '',
		dataType: DataType.Email,
	},
	{
		id: '3',
		name: 'phone',
		label: 'Phone Number',
		placeholder: 'Enter your phone number',
		isRequired: false,
		initialValue: '',
		dataType: DataType.NumeroDeTelefone,
	},
	{
		id: '4',
		name: 'cpf',
		label: 'CPF',
		placeholder: 'Enter your CPF',
		isRequired: true,
		initialValue: '',
		dataType: DataType.CPF,
	},
];

export const mockedNewButtons: NewButtonProps[] = [
	{ config: { colorScheme: 'blue', icon: <ImCancelCircle />, text: 'Save' }, variant: 'save' },
];

export const mockedNewForm: NewFormProps[] = [{ button: mockedNewButtons, input: mockedNewInputs }];
