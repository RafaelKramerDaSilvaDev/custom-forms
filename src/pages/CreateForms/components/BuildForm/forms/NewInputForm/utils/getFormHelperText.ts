import { InputDataTypeOptions } from '../constants';
import { InputDataType } from '../types';
import { getGrammaticalGender } from './getGrammaticalGender';

export function getFormHelperText(value: InputDataType): string {
	const formattedValue = InputDataTypeOptions[value];
	return `Preencha ${getGrammaticalGender(value)} ${formattedValue} no campo acima.`;
}
