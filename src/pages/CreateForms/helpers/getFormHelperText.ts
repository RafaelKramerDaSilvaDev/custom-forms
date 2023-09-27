import { InputDataType } from '../types/InputDataType';
import { determinateGender } from '../../../app/utils/determinateGender';

const DEFAULT_HELPER_TEXT: Record<InputDataType, string> = {
	Texto: 'Preencha o texto no campo acima.',
	TextoLongo: 'Preencha o texto no campo acima.',
	Numero: 'Preencha o número no campo acima.',
	CPF: 'Preencha o CPF no campo acima.',
	CNPJ: 'Preencha o CNPJ no campo acima.',
	CPFouCNPJ: 'Preencha o CPF ou CNPJ no campo acima.',
	NumeroDeTelefone: 'Preencha o número de telefone no campo acima.',
	Data: 'Preencha a data no campo acima.',
	Hora: 'Preencha a hora no campo acima.',
	Email: 'Preencha o e-mail no campo acima.',
	URL: 'Preencha a URL no campo acima.',
	CEP: 'Preencha o CEP no campo acima.',
	Moeda: 'Preencha o valor no campo acima.',
	Senha: 'Preencha a senha no campo acima.',
	SimOuNao: 'Selecione uma opção no campo acima.',
	Cor: 'Selecione uma cor campo acima.',
};

export function getFormHelperText(dataType: InputDataType | null, name: string | null): string {
	if (dataType && dataType in DEFAULT_HELPER_TEXT) {
		return DEFAULT_HELPER_TEXT[dataType];
	} else if (name) {
		const gender = determinateGender(name);
		if (gender === 'o' || gender === 'a') {
			return `Preencha ${gender} ${name} no campo acima.`;
		} else {
			return `Preencha ${name}`;
		}
	} else {
		return '';
	}
}
