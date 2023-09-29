import { determinateGender } from '../../../app/utils/determinateGender';
import { defaultHelperText } from '../constants';
import { InputDataTypes } from '../types';

export function getFormHelperText(dataType: InputDataTypes | null, name: string | null): string {
	if (dataType && dataType in defaultHelperText) {
		return defaultHelperText[dataType];
	} else if (name) {
		const gender = determinateGender(name);
		if (gender === 'o' || gender === 'a') {
			return `Preencha ${gender} ${name} no campo acima.`;
		} else {
			return `Preencha ${name}.`;
		}
	} else {
		return '';
	}
}
