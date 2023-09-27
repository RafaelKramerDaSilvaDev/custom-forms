import { Button } from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { ButtonActionType, ButtonConfigType, NewButtonType } from '../../types';
import { NewButtonContainer } from './styles';

const buttonConfigs: Record<ButtonActionType, ButtonConfigType> = {
	save: { icon: <FaSave />, text: 'Salvar', colorScheme: 'green' },
	saveAndExit: { icon: <FaSave />, text: 'Salvar e Sair', colorScheme: 'green' },
	saveAndNew: { icon: <FaSave />, text: 'Salvar e Novo', colorScheme: 'green' },
	cancel: { icon: <ImCancelCircle />, text: 'Cancelar', colorScheme: 'red' },
	clearField: { icon: <ImCancelCircle />, text: 'Limpar Campo', colorScheme: 'red' },
	clearAllFields: { icon: <ImCancelCircle />, text: 'Limpar Todos os Campos', colorScheme: 'red' },
};

export function NewButton({ action }: NewButtonType) {
	const config = buttonConfigs[action];

	return (
		<NewButtonContainer>
			<Button leftIcon={config.icon} colorScheme={config.colorScheme}>
				{config.text}
			</Button>
		</NewButtonContainer>
	);
}
