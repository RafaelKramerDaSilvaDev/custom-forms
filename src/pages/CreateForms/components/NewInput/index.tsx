import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { defineMasks } from '../../../../app/utils/defineMasks';
import { DATA_TYPE_TO_INPUT } from '../../constants';
import { NewInputType } from '../../types';
import { NewInputContainer } from './styles';

export function NewInput({ label, placeholder, isRequired, dataType, initialValue }: NewInputType) {
	const inputType = DATA_TYPE_TO_INPUT[dataType];

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
