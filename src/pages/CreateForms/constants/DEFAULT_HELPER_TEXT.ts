import { InputDataType } from '../types';

export const DEFAULT_HELPER_TEXT: Record<InputDataType, string> = {
	Texto: '',
	TextoGrande: '',
	Numero: '',
	CPF: 'Preencha o CPF no campo acima.',
	CNPJ: 'Preencha o CNPJ no campo acima.',
	Telefone: 'Preencha o telefone no campo acima.',
	Data: 'Preencha a data no campo acima.',
	Hora: 'Preencha a hora no campo acima.',
	Email: 'Preencha o e-mail no campo acima.',
	URL: 'Preencha a URL no campo acima.',
	CEP: 'Preencha o CEP no campo acima.',
	Monetario: '',
	Senha: 'Preencha a senha no campo acima.',
	CaixaDeOpcoes: 'Selecione uma opção no campo acima.',
	Cor: 'Selecione uma cor campo acima.',
};
