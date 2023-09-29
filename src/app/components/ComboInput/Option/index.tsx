import { ReactNode } from 'react';
import { OptionStylized } from './styles';
import { useComboInput } from '../ComboInputContext';

interface OptionProps {
	children: ReactNode;
	value?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export function Option({ children, value, onClick }: OptionProps) {
	const { setValue, setIsOpen } = useComboInput();
	const newValue = value ? value : String(children);

	const handleOptionClick = () => {
		setValue(newValue);
		setIsOpen(false);
		onClick;
	};

	return <OptionStylized onClick={handleOptionClick}>{children}</OptionStylized>;
}
