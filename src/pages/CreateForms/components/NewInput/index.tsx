import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { NewInputContainer } from './styles';
import { NewInputProps } from '../../types/NewInputProps';

export function NewInput({ label, placeholder, isRequired }: NewInputProps) {
	return (
		<NewInputContainer>
			<FormControl isRequired={isRequired}>
				<FormLabel>{label}</FormLabel>
				<Input placeholder={placeholder} />
			</FormControl>
		</NewInputContainer>
	);
}
