import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { dataTypeToInputType } from './dataTypes';
import { NewInputContainer } from './styles';
import { NewInputProps } from '../../types/NewProps';

export function NewInput({ label, placeholder, isRequired, dataType, initialValue }: NewInputProps) {
	const inputType = dataTypeToInputType[dataType];

	return (
		<NewInputContainer>
			<FormControl isRequired={isRequired}>
				<FormLabel>{label}</FormLabel>
				<Input type={inputType} placeholder={placeholder} defaultValue={initialValue} />
			</FormControl>
		</NewInputContainer>
	);
}
