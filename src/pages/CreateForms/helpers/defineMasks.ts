import { InputDataTypes } from '../types';

type DefineMasksType = {
	type: InputDataTypes;
	value?: string;
};

export function defineMasks({ type, value }: DefineMasksType): string {
	switch (type) {
		case 'CPF':
			return '999.999.999-99';
		case 'CNPJ':
			return '99.999.999/9999-99';
		case 'CEP':
			return '99999-999';
		case 'Telefone':
			const newValue = value ? value : '';
			return definePhoneMask(newValue);
		default:
			return '';
	}
}
export function definePhoneMask(value: string): string {
	switch (value) {
		case '+55':
			return '(99) 99999-9999';
		case '+1':
			return '(999) 999-9999';
		case '+44':
			return '(9999) 999-999';
		case '+33':
			return '09 99 99 99 99';
		case '+81':
			return '099-9999-9999';
		case '+49':
			return '09999 999999';
		case '+39':
			return '099 9999 9999';
		case '+61':
			return '0999 999 999';
		case '+7':
			return '(999) 999-99-99';
		case '+20':
			return '0999 999 9999';
		case '+91':
			return '09999 999999';
		case '+86':
			return '0999 9999 9999';
		case '+34':
			return '099 999 99 99';
		case '+27':
			return '099 999 9999';
		case '+64':
			return '0999 999 999';
		case '+62':
			return '0999-999-999';
		case '+54':
			return '(99) 9999-9999';
		case '+52':
			return '(99) 9999-9999';
		case '+90':
			return '(999) 999 99 99';
		case '+84':
			return '0999 999 999';
		default:
			return '';
	}
}
