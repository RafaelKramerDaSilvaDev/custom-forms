import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { defineMasks } from '../../../../app/utils/defineMasks';
import { dataTypeToInput } from '../../constants';
import { NewInputType } from '../../types';
import { NewInputContainer } from './styles';

export function NewInput({ label, placeholder, isRequired, dataType, initialValue, formHelperText }: NewInputType) {
	const inputType = dataTypeToInput[dataType];

	const mask: string = defineMasks(dataType);

	return (
		<NewInputContainer>
			<FormControl isRequired={isRequired}>
				<FormLabel>{label}</FormLabel>
				<Input as={InputMask} mask={mask} type={inputType} placeholder={placeholder} defaultValue={initialValue} />
				<FormHelperText>{formHelperText}</FormHelperText>
			</FormControl>
		</NewInputContainer>
	);
}
