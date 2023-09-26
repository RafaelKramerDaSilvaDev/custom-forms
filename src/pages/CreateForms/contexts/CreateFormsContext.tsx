import { ReactNode, createContext, useContext, useState } from 'react';
import { OptionSettingsBar } from '../../../app/templates/MainTemplate/components/SettingsBar/types';
import { FormItem } from '../types';

type CreateFormsContextType = {
	optionSettingsBar: OptionSettingsBar;
	setOptionSettingsBar: React.Dispatch<React.SetStateAction<OptionSettingsBar>>;
	forms: FormItem[];
	setForms: React.Dispatch<React.SetStateAction<FormItem[]>>;
};

const CreateFormsContext = createContext<CreateFormsContextType>({} as CreateFormsContextType);

type CreateFormsProviderProps = {
	children: ReactNode;
};

export function CreateFormsProvider({ children }: CreateFormsProviderProps) {
	const [optionSettingsBar, setOptionSettingsBar] = useState<OptionSettingsBar>('input');
	const [forms, setForms] = useState<FormItem[]>([]);

	return (
		<CreateFormsContext.Provider
			value={{
				optionSettingsBar,
				setOptionSettingsBar,
				forms,
				setForms,
			}}
		>
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
