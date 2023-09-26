import { NewButtonProps } from './components/NewButton/types';
import { NewInputProps } from './components/NewInput/types';

export type FormItem = InputItem | ButtonItem;

export interface InputItem {
	type: 'input';
	data: NewInputProps;
}

export interface ButtonItem {
	type: 'button';
	data: NewButtonProps;
}
