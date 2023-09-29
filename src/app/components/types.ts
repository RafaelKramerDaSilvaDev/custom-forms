import { DataType } from '../../pages/CreateForms/enums/DataType';

export interface InputComponentProps {
	children?: React.ReactNode;
	dataType: DataType;
	formHelperText: string;
	id: string;
	isRequired: boolean;
	label: string;
	placeholder: string;
	initialValue: string | undefined;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	mask?: string;
}
