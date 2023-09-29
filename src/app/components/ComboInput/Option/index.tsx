import { ReactNode } from 'react';
import { useComboInput } from '../ComboInputContext';
import { OptionStylized } from './styles';

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	value?: string;
}

export function Option({ children, value, onClick }: OptionProps) {
	const { setValue, setIsOpen } = useComboInput();
	const newValue = value ? value : String(children);

	const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setValue(newValue);
		setIsOpen(false);

		if (onClick) {
			onClick(event);
		}
	};

	return <OptionStylized onClick={handleOptionClick}>{children}</OptionStylized>;
}
