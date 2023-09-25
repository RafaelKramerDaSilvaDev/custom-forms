import { ChakraProps } from '@chakra-ui/react';
import { DataType } from '../components/NewInput/dataTypes';
import { ButtonConfig, ButtonVariant } from '.';

export type NewFormProps = {
	input?: NewInputProps[];
	button?: NewButtonProps[];
};

export interface NewInputProps extends ChakraProps {
	id: string;
	dataType: DataType;
	name: string;
	label: string;
	placeholder: string;
	isRequired: boolean;
	initialValue?: string;
}

export interface NewButtonProps extends ChakraProps {
	variant: ButtonVariant;
	config: ButtonConfig;
}
