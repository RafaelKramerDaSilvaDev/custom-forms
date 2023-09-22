import { ReactNode, createContext, useContext, useState } from 'react';

type CreateFormsContextType = {
	optionSettingsBar: string;
	setOptionSettingsBar: React.Dispatch<React.SetStateAction<string>>;
};

const CreateFormsContext = createContext<CreateFormsContextType>({} as CreateFormsContextType);

type CreateFormsProviderProps = {
	children: ReactNode;
};

export function CreateFormsProvider({ children }: CreateFormsProviderProps) {
	const [optionSettingsBar, setOptionSettingsBar] = useState('field');

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
