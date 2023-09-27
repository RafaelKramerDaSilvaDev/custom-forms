import { DataType } from '../../pages/CreateForms/enums/DataType';

export function defineMasks(type: DataType): string {
	switch (type) {
		case DataType.CPF:
			return '999.999.999-99';
		case DataType.CNPJ:
			return '99.999.999/9999-99';
		case DataType.CEP:
			return '99999-999';
		case DataType.Telefone:
			return '(99) 99999-9999';
	}
	return '';
}
