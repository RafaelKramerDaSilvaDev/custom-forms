import { DataType } from '../enums/DataType';
import { FormItem } from '../types';

export const mockedFormItems: FormItem[] = [
	{
		type: 'input',
		data: {
			id: '1',
			name: 'name',
			label: 'Name',
			placeholder: 'Enter your name',
			isRequired: true,
			initialValue: 'John Doe',
			dataType: DataType.Texto,
		},
	},
	{
		type: 'input',
		data: {
			id: '2',
			name: 'email',
			label: 'Email',
			placeholder: 'Enter your email',
			isRequired: false,
			initialValue: '',
			dataType: DataType.Email,
		},
	},
	{
		type: 'button',
		data: {
			action: 'save',
			linkAction: '',
			linkName: '',
			name: 'save',
			text: 'Save',
		},
	},
	{
		type: 'input',
		data: {
			id: '3',
			name: 'phone',
			label: 'Phone Number',
			placeholder: 'Enter your phone number',
			isRequired: false,
			initialValue: '',
			dataType: DataType.NumeroDeTelefone,
		},
	},
	{
		type: 'button',
		data: {
			action: 'cancel',
			linkAction: '',
			linkName: '',
			name: 'save',
			text: 'Save',
		},
	},
	{
		type: 'input',
		data: {
			id: '4',
			name: 'cpf',
			label: 'CPF',
			placeholder: 'Enter your CPF',
			isRequired: true,
			initialValue: '',
			dataType: DataType.CPF,
		},
	},
];
