import { InputDataType } from '../types/InputDataType';
import { determinateGender } from '../../../app/utils/determinateGender';

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

export function getPlaceholders(dataType: InputDataType | null, name: string | null): string {
	// Se dataType for fornecido e for válido, retorne o placeholder padrão
	if (dataType && dataType in DEFAULT_PLACEHOLDERS) {
		return DEFAULT_PLACEHOLDERS[dataType];
	}
	// Se name for fornecido, crie um placeholder personalizado
	else if (name) {
		const gender = determinateGender(name);
		if (gender === 'o' || gender === 'a') {
			return `Digite ${gender} ${name}`;
		} else {
			return `Digite ${name}`;
		}
	}
	// Se nenhum dos dois for fornecido, retorne uma string vazia
	else {
		return '';
	}
}
