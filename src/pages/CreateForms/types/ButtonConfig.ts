import { ColorSchemes } from './ColorSchemes';

export type ButtonConfig = {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
	text: string;
	colorScheme: ColorSchemes;
};
