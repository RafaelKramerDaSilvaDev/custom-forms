import { DataType } from '../enums/DataType';

export type NewInputType = {
	id: string;
	dataType: DataType;
	label: string;
	placeholder: string;
	isRequired: boolean;
	initialValue?: string;
};
