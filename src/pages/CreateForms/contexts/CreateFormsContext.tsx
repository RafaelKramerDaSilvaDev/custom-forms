import { ReactNode, createContext, useContext, useState } from 'react';
import { OptionSettingsBar } from '../../../app/templates/MainTemplate/components/SettingsBar/types';
import { FormItemType } from '../types';

type CreateFormsContextType = {
	optionSettingsBar: OptionSettingsBar;
	setOptionSettingsBar: React.Dispatch<React.SetStateAction<OptionSettingsBar>>;
	forms: FormItemType[];
	setForms: React.Dispatch<React.SetStateAction<FormItemType[]>>;
};

const CreateFormsContext = createContext<CreateFormsContextType>({} as CreateFormsContextType);

type CreateFormsProviderProps = {
	children: ReactNode;
};

export function CreateFormsProvider({ children }: CreateFormsProviderProps) {
	const [optionSettingsBar, setOptionSettingsBar] = useState<OptionSettingsBar>('input');
	const [forms, setForms] = useState<FormItemType[]>([]);

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
