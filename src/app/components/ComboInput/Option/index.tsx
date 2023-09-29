import { ReactNode } from 'react';
import { OptionStylized } from './styles';
import { useComboInput } from '../ComboInputContext';

interface OptionProps {
	children: ReactNode;
	value?: string;
}

export function Option({ children, value }: OptionProps) {
	const { setValue, setIsOpen } = useComboInput();
	const newValue = value ? value : String(children);

	const handleOptionClick = () => {
		setValue(newValue);
		setIsOpen(false);
	};

	return <OptionStylized onClick={handleOptionClick}>{children}</OptionStylized>;
}
