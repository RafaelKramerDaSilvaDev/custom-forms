import { InputPropertiesTypes } from '../../../pages/CreateForms/types';
import { InputMaskStylized } from './styles';

type InputProps = {
	inputPropertiesTypes: InputPropertiesTypes;
	mask: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ mask, inputPropertiesTypes, onChange }: InputProps) {
	return (
		<InputMaskStylized
			mask={mask}
			onChange={onChange}
			placeholder={inputPropertiesTypes.placeholder}
			defaultValue={inputPropertiesTypes.initialValue}
		/>
	);
}
