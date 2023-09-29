import { InputComponentsTypes } from '../types';

export function defineComponent(value: string): InputComponentsTypes {
	switch (value) {
		case 'Texto':
			return 'input';
		case 'TextoGrande':
			return 'text-area';
		case 'Numero':
			return 'input';
		case 'CPF':
			return 'input';
		case 'CNPJ':
			return 'input';
		case 'Telefone':
			return 'combo-input';
		case 'Data':
			return 'input';
		case 'Hora':
			return 'input';
		case 'Email':
			return 'input';
		case 'URL':
			return 'input';
		case 'CEP':
			return 'input';
		case 'Monetario':
			return 'input';
		case 'Senha':
			return 'input';
		case 'CaixaDeOpcoes':
			return 'input';
		case 'Cor':
			return 'input';
		default:
			throw new Error(`Invalid action value: ${value}`);
	}
}
