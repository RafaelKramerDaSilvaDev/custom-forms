import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { NewInputContainer } from './styles';
import { NewInputProps, dataTypeToInputType } from './types';
import { defineMasks } from '../../../../app/utils/defineMasks';

export function NewInput({ label, placeholder, isRequired, dataType, initialValue }: NewInputProps) {
	const inputType = dataTypeToInputType[dataType];

	const mask: string = defineMasks(dataType);

	return (
		<NewInputContainer>
			<FormControl isRequired={isRequired}>
				<FormLabel>{label}</FormLabel>
				<Input as={InputMask} mask={mask} type={inputType} placeholder={placeholder} defaultValue={initialValue} />
			</FormControl>
		</NewInputContainer>
	);
}
