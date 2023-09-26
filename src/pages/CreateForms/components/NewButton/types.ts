import { ColorSchemesProps } from '../../../../app/shared/types';

export type ButtonConfig = {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	text: string;
	colorScheme: ColorSchemesProps;
};

export type ButtonAction = 'save' | 'saveAndExit' | 'saveAndNew' | 'cancel' | 'clearField' | 'clearAllFields';

export interface NewButtonProps {
	action: ButtonAction;
	linkAction: string;
	text: string;
	name: string;
	linkName: string;
}
