import { ReactNode, createContext, useContext, useState } from 'react';
import { OptionSettingsBar } from '../types/OptionSettingsBar';

type CreateFormsContextType = {
	optionSettingsBar: OptionSettingsBar;
	setOptionSettingsBar: React.Dispatch<React.SetStateAction<OptionSettingsBar>>;
};

const CreateFormsContext = createContext<CreateFormsContextType>({} as CreateFormsContextType);

type CreateFormsProviderProps = {
	children: ReactNode;
};

export function CreateFormsProvider({ children }: CreateFormsProviderProps) {
	const [optionSettingsBar, setOptionSettingsBar] = useState<OptionSettingsBar>('input');

	return (
		<CreateFormsContext.Provider value={{ optionSettingsBar, setOptionSettingsBar }}>
			{children}
		</CreateFormsContext.Provider>
	);
}

export function useCreateForms() {
	const context = useContext(CreateFormsContext);
	if (context === undefined) {
		throw new Error('useCreateForms deve ser usado dentro de um CreateFormsProvider');
	}
	return context;
}
