import { InputDataType } from '../forms/types';
import { getGrammaticalGender } from './getGrammaticalGender';

export function getPlaceholder(value: InputDataType): string {
	return `Digite ${getGrammaticalGender(value)} ${value}`;
}
