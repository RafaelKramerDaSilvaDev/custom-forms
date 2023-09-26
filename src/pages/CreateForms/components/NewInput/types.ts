import { InputProps } from '../../../../app/shared/types/InputProps';

export interface NewInputProps {
	id: string;
	dataType: DataType;
	name: string;
	label: string;
	placeholder: string;
	isRequired: boolean;
	initialValue?: string;
}

export enum DataType {
	Texto = 'Texto',
	TextoLongo = 'TextoLongo',
	Numero = 'Numero',
	CPF = 'CPF',
	CNPJ = 'CNPJ',
	CPFouCNPJ = 'CPFouCNPJ',
	NumeroDeTelefone = 'NumeroDeTelefone',
	Data = 'Data',
	Hora = 'Hora',
	Email = 'Email',
	URL = 'URL',
	CEP = 'CEP',
	Moeda = 'Moeda',
	Senha = 'Senha',
	SimOuNao = 'SimOuNao',
	Cor = 'Cor',
}

export const dataTypeToInputType: Record<DataType, InputProps> = {
	[DataType.Texto]: 'text',
	[DataType.TextoLongo]: 'text',
	[DataType.Numero]: 'number',
	[DataType.CPF]: 'text',
	[DataType.CNPJ]: 'text',
	[DataType.CPFouCNPJ]: 'text',
	[DataType.NumeroDeTelefone]: 'tel',
	[DataType.Data]: 'date',
	[DataType.Hora]: 'time',
	[DataType.Email]: 'email',
	[DataType.URL]: 'url',
	[DataType.CEP]: 'text',
	[DataType.Moeda]: 'text',
	[DataType.Senha]: 'password',
	[DataType.SimOuNao]: 'text',
	[DataType.Cor]: 'color',
};