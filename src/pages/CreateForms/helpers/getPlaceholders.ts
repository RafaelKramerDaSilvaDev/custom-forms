import { InputDataType } from '../types/InputDataType';
import { determinateGender } from '../../../app/utils/determinateGender';
import { DEFAULT_PLACEHOLDERS } from '../constants';

export function getPlaceholders(dataType: InputDataType | null, name: string | null): string {
	if (dataType && dataType in DEFAULT_PLACEHOLDERS) {
		return DEFAULT_PLACEHOLDERS[dataType];
	} else if (name) {
		const gender = determinateGender(name);
		if (gender === 'o' || gender === 'a') {
			return `Digite ${gender} ${name}`;
		} else {
			return `Digite ${name}`;
		}
	} else {
		return '';
	}
}
