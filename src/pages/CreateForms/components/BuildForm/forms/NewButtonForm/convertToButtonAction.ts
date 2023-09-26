import { ButtonAction } from '../../../NewButton/types';

export function convertToButtonAction(value: string): ButtonAction {
	switch (value) {
		case 'Salvar':
			return 'save';
		case 'Salvar e Sair':
			return 'saveAndExit';
		case 'Salvar e Novo':
			return 'saveAndNew';
		case 'Cancelar':
			return 'cancel';
		case 'Limpar Campo':
			return 'clearField';
		case 'Limpar Todos os Campos':
			return 'clearAllFields';
		default:
			throw new Error(`Invalid action value: ${value}`);
	}
}
