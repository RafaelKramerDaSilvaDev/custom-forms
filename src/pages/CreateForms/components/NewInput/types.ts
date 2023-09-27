import { InputProps } from '../../../../app/types';
import { DataType } from '../../enums/DataType';

export interface NewInputProps {
	id: string;
	dataType: DataType;
	label: string;
	placeholder: string;
	isRequired: boolean;
	initialValue?: string;
}

export const dataTypeToInputType: Record<DataType, InputProps> = {
	[DataType.Texto]: 'text',
	[DataType.TextoGrande]: 'text',
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
