import { Button } from '@chakra-ui/react';
import { FaSave } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { NewButtonContainer } from './styles';
import { ButtonAction, ButtonConfig, NewButtonProps } from './types';

const buttonConfigs: Record<ButtonAction, ButtonConfig> = {
	save: { icon: <FaSave />, text: 'Salvar', colorScheme: 'green' },
	saveAndExit: { icon: <FaSave />, text: 'Salvar e Sair', colorScheme: 'green' },
	saveAndNew: { icon: <FaSave />, text: 'Salvar e Novo', colorScheme: 'green' },
	cancel: { icon: <ImCancelCircle />, text: 'Cancelar', colorScheme: 'red' },
	clearField: { icon: <ImCancelCircle />, text: 'Limpar Campo', colorScheme: 'red' },
	clearAllFields: { icon: <ImCancelCircle />, text: 'Limpar Todos os Campos', colorScheme: 'red' },
};

export function NewButton({ action }: NewButtonProps) {
	const config = buttonConfigs[action];

	return (
		<NewButtonContainer>
			<Button leftIcon={config.icon} colorScheme={config.colorScheme}>
				{config.text}
			</Button>
		</NewButtonContainer>
	);
}
