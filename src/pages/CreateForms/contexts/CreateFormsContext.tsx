import { ReactNode, createContext, useContext, useState } from 'react';
import { OptionSettingsBar } from '../../../app/templates/MainTemplate/components/SettingsBar/types';
import { NewInputProps } from '../components/NewInput/types';
import { NewButtonProps } from '../components/NewButton/types';
import { FormItem } from '../types';
import { mockedFormItems } from './mockedFormItems';

type CreateFormsContextType = {
	optionSettingsBar: OptionSettingsBar;
	setOptionSettingsBar: React.Dispatch<React.SetStateAction<OptionSettingsBar>>;
	newInputs: NewInputProps[];
	setNewInputs: React.Dispatch<React.SetStateAction<NewInputProps[]>>;
	newButtons: NewButtonProps[];
	setNewButtons: React.Dispatch<React.SetStateAction<NewButtonProps[]>>;
	forms: FormItem[];
	setForms: React.Dispatch<React.SetStateAction<FormItem[]>>;
};

const CreateFormsContext = createContext<CreateFormsContextType>({} as CreateFormsContextType);

type CreateFormsProviderProps = {
	children: ReactNode;
};

export function CreateFormsProvider({ children }: CreateFormsProviderProps) {
	const [optionSettingsBar, setOptionSettingsBar] = useState<OptionSettingsBar>('input');
	const [newInputs, setNewInputs] = useState<NewInputProps[]>([]);
	const [newButtons, setNewButtons] = useState<NewButtonProps[]>([]);
	const [forms, setForms] = useState<FormItem[]>([...mockedFormItems]);

	return (
		<CreateFormsContext.Provider
			value={{
				optionSettingsBar,
				setOptionSettingsBar,
				newInputs,
				setNewInputs,
				newButtons,
				setNewButtons,
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
