import { ReactNode, createContext, useContext, useState } from 'react';

type ComboInputContextType = {
	setValue: React.Dispatch<React.SetStateAction<string>>;
	value: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
	isOpen: boolean | undefined;
};

const ComboInputContext = createContext<ComboInputContextType>({} as ComboInputContextType);

type ComboInputProviderProps = {
	children: ReactNode;
};

export function ComboInputProvider({ children }: ComboInputProviderProps) {
	const [value, setValue] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>();

	return (
		<ComboInputContext.Provider value={{ setValue, value, isOpen, setIsOpen }}>{children}</ComboInputContext.Provider>
	);
}

export function useComboInput() {
	const context = useContext(ComboInputContext);
	if (context === undefined) {
		throw new Error('useComboInput deve ser usado dentro de um ComboInputProvider');
	}
	return context;
}
