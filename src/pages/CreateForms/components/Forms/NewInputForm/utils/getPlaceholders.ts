import { InputDataType } from '../types';
import { determinateGender } from './determinateGender';

const DEFAULT_PLACEHOLDERS: Record<InputDataType, string> = {
	Texto: 'Digite o texto',
	TextoLongo: 'Digite o texto',
	Numero: 'Digite o número',
	CPF: 'Digite o CPF',
	CNPJ: 'Digite o CNPJ',
	CPFouCNPJ: 'Digite o CPF ou CNPJ',
	NumeroDeTelefone: 'Digite o número de telefone',
	Data: '',
	Hora: '',
	Email: 'Digite o email',
	URL: 'Digite a URL',
	CEP: 'Digite o CEP',
	Moeda: 'Digite o valor',
	Senha: 'Digite a senha',
	SimOuNao: '',
	Cor: '',
};
export function getPlaceholders(value: InputDataType | string): string {
	if (value in DEFAULT_PLACEHOLDERS) {
		return DEFAULT_PLACEHOLDERS[value as InputDataType];
	} else if (value && typeof value === 'string') {
		const gender = determinateGender(value);
		if (gender === 'o' || gender === 'a') {
			return `Digite ${gender} ${value}`;
		} else if (gender === '') {
			return `Digite ${value}`;
		} else {
			return `Digite ${value}`;
		}
	} else {
		return '';
	}
}
