import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { NewFieldContainer } from './styles';
import { NewFieldProps } from '../types';

export function NewField({ label, placeholder, isRequired }: NewFieldProps) {
	return (
		<NewFieldContainer>
			<FormControl isRequired={isRequired}>
				<FormLabel>{label}</FormLabel>
				<Input placeholder={placeholder} />
			</FormControl>
		</NewFieldContainer>
	);
}
