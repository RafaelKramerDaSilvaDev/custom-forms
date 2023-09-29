import { InputDataTypes, InputTypes } from '../types';

export function defineType(type: InputDataTypes): InputTypes {
	switch (type) {
		case 'Texto':
			return 'text';
		case 'TextoGrande':
			return 'text';
		case 'Numero':
			return 'number';
		case 'CPF':
			return 'text';
		case 'CNPJ':
			return 'text';
		case 'Telefone':
			return 'tel';
		case 'Data':
			return 'date';
		case 'Hora':
			return 'time';
		case 'Email':
			return 'email';
		case 'URL':
			return 'url';
		case 'CEP':
			return 'number';
		case 'Monetario':
			return 'number';
		case 'Senha':
			return 'password';
		case 'CaixaDeOpcoes':
			return 'text';
		case 'Cor':
			return 'color';
	}
}
