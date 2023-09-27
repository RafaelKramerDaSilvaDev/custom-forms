import { ColorSchemesProps } from '../../../app/types';

export type ButtonConfigType = {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	text: string;
	colorScheme: ColorSchemesProps;
};
