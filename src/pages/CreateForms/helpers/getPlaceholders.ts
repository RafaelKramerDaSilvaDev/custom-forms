import { InputDataType } from '../types/InputDataType';
import { determinateGender } from '../../../app/utils/determinateGender';

const DEFAULT_PLACEHOLDERS: Record<InputDataType, string> = {
	Texto: '',
	TextoGrande: '',
	Numero: '',
	CPF: 'Digite o CPF',
	CNPJ: 'Digite o CNPJ',
	Telefone: 'Digite telefone',
	Data: '',
	Hora: '',
	Email: 'Digite o email',
	URL: 'Digite a URL',
	CEP: 'Digite o CEP',
	Monetario: 'Digite o valor',
	Senha: 'Digite a senha',
	CaixaDeOpcoes: 'Selecione uma opção',
	Cor: '',
};

export function getPlaceholders(dataType: InputDataType | null, name: string | null): string {
	if (dataType && dataType in DEFAULT_PLACEHOLDERS) {
		return DEFAULT_PLACEHOLDERS[dataType];
	} else if (name) {
		const gender = determinateGender(name);
		if (gender === 'o' || gender === 'a') {
			return `Digite ${gender} ${name}`;
		} else {
			return `Digite ${name}`;
		}
	} else {
		return '';
	}
}
