import { InputDataType } from '../types';

const GrammaticalGenderMap: Record<InputDataType, string> = {
	Texto: 'o',
	TextoLongo: 'o',
	Numero: 'o',
	CPF: 'o',
	CNPJ: 'o',
	CPFouCNPJ: 'o',
	NumeroDeTelefone: 'o',
	Data: 'a',
	Hora: 'a',
	Email: 'o',
	URL: 'o',
	CEP: 'o',
	Moeda: 'a',
	Senha: 'a',
	SimOuNao: 'o',
	Cor: 'a',
};

export function getGrammaticalGender(value: InputDataType): string {
	return GrammaticalGenderMap[value];
}
