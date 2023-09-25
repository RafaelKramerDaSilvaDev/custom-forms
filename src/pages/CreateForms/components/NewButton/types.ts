export type ColorSchemes =
	| 'whiteAlpha'
	| 'blackAlpha'
	| 'gray'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'teal'
	| 'blue'
	| 'cyan'
	| 'purple'
	| 'pink'
	| 'linkedin'
	| 'facebook'
	| 'messenger'
	| 'whatsapp'
	| 'twitter'
	| 'telegram'
	| (string & {});

export type ButtonVariant = 'save' | 'saveAndExit' | 'saveAndNew' | 'cancel' | 'clearField' | 'clearAllFields';

export type ButtonConfig = {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
	text: string;
	colorScheme: ColorSchemes;
};
