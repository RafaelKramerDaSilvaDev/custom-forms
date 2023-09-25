import { InputDataTypeOptions } from '../forms/constants';
import { InputDataType } from '../forms/types';
import { getGrammaticalGender } from './getGrammaticalGender';

export function getFormHelperText(value: InputDataType): string {
	const formattedValue = InputDataTypeOptions[value];
	return `Preencha ${getGrammaticalGender(value)} ${formattedValue} no campo acima.`;
}
