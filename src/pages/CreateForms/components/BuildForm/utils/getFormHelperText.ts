import { InputDataType } from '../forms/types';
import { getGrammaticalGender } from './getGrammaticalGender';

export function getFormHelperText(value: InputDataType): string {
	return `Preencha ${getGrammaticalGender(value)} ${value} no campo acima.`;
}
