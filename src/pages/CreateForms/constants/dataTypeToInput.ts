import { InputProps } from '../../../app/types';
import { DataType } from '../enums/DataType';

export const dataTypeToInput: Record<DataType, InputProps> = {
	[DataType.Texto]: 'text',
	[DataType.TextoGrande]: 'text',
	[DataType.Numero]: 'number',
	[DataType.CPF]: 'text',
	[DataType.CNPJ]: 'text',
	[DataType.CPFouCNPJ]: 'text',
	[DataType.Telefone]: 'tel',
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
