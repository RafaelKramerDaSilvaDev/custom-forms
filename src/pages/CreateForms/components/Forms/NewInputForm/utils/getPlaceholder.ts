import { InputDataTypeOptions } from '../constants';
import { InputDataType } from '../types';
import { getGrammaticalGender } from './getGrammaticalGender';

export function getPlaceholder(value: InputDataType): string {
	const formattedValue = InputDataTypeOptions[value];

	return `Digite ${getGrammaticalGender(value)} ${formattedValue}`;
}
