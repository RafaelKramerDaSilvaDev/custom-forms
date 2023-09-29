import { InputDataTypes } from '../types';

export function defineMasks(type: InputDataTypes): string {
	switch (type) {
		case 'CPF':
			return '999.999.999-99';
		case 'CNPJ':
			return '99.999.999/9999-99';
		case 'CEP':
			return '99999-999';
		case 'Telefone':
			return '(99) 99999-9999';
		default:
			return '';
	}
}
