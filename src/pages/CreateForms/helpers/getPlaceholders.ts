import { determinateGender } from '../../../app/utils/determinateGender';
import { defaultPlaceholders } from '../constants';
import { InputDataTypes } from '../types';

export function getPlaceholders(dataType: InputDataTypes | null, name: string | null): string {
	if (dataType && dataType in defaultPlaceholders) {
		return defaultPlaceholders[dataType];
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
