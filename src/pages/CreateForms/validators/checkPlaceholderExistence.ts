import { InputDataTypes } from '../types';

export function checkPlaceholderExistence(watchDataType: InputDataTypes): boolean {
	switch (watchDataType) {
		case 'Texto':
			return true;
		case 'TextoGrande':
			return true;
		case 'Numero':
			return true;
		case 'CPF':
			return true;
		case 'CNPJ':
			return true;
		case 'Telefone':
			return true;
		case 'Data':
			return false;
		case 'Hora':
			return false;
		case 'Email':
			return true;
		case 'URL':
			return true;
		case 'CEP':
			return true;
		case 'Monetario':
			return true;
		case 'Senha':
			return true;
		case 'CaixaDeOpcoes':
			return true;
		case 'Cor':
			return false;
	}
}
