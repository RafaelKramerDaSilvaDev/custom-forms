import { DataType } from '../enums/DataType';
import { InputTypes } from '../types';

export const dataTypeToInput: Record<DataType, InputTypes> = {
	[DataType.Texto]: 'text',
	[DataType.TextoGrande]: 'text',
	[DataType.Numero]: 'number',
	[DataType.CPF]: 'text',
	[DataType.CNPJ]: 'text',
	[DataType.Telefone]: 'tel',
	[DataType.Data]: 'date',
	[DataType.Hora]: 'time',
	[DataType.Email]: 'email',
	[DataType.URL]: 'url',
	[DataType.CEP]: 'text',
	[DataType.Monetario]: 'text',
	[DataType.Senha]: 'password',
	[DataType.CaixaDeOpcoes]: 'text',
	[DataType.Cor]: 'color',
};
