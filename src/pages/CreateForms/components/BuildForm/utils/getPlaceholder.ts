import { InputDataTypeOptions } from '../forms/constants';
import { InputDataType } from '../forms/types';
import { getGrammaticalGender } from './getGrammaticalGender';

export function getPlaceholder(value: InputDataType): string {
	const formattedValue = InputDataTypeOptions[value];

	return `Digite ${getGrammaticalGender(value)} ${formattedValue}`;
}
