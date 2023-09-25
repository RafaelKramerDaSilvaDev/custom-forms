import { ReactNode, createContext, useContext, useState } from 'react';
import { OptionSettingsBar } from '../types/OptionSettingsBar';
import { NewButtonProps, NewFormProps, NewInputProps } from '../types/NewProps';

type CreateFormsContextType = {
	optionSettingsBar: OptionSettingsBar;
	setOptionSettingsBar: React.Dispatch<React.SetStateAction<OptionSettingsBar>>;
	setForms: React.Dispatch<React.SetStateAction<NewFormProps[]>>;
	forms: NewFormProps[];
};

const CreateFormsContext = createContext<CreateFormsContextType>({} as CreateFormsContextType);

type CreateFormsProviderProps = {
	children: ReactNode;
};

export function CreateFormsProvider({ children }: CreateFormsProviderProps) {
	const [optionSettingsBar, setOptionSettingsBar] = useState<OptionSettingsBar>('input');
	const [newInputs, setNewInputs] = useState<NewInputProps[]>([]);
	const [newButtons, setNewButtons] = useState<NewButtonProps[]>([]);
	const [forms, setForms] = useState<NewFormProps[]>([]);

	return (
		<CreateFormsContext.Provider value={{ optionSettingsBar, setOptionSettingsBar, forms, setForms }}>
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
