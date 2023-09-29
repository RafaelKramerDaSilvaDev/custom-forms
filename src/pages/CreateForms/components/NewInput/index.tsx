import { FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { ComboInput } from '../../../../app/components/ComboInput';
import { Option } from '../../../../app/components/ComboInput/Option';
import { defineComponent, defineMasks, defineType } from '../../helpers';
import { NewInputType } from '../../types';
import { NewInputContainer } from './styles';

export function NewInput({ inputDataTypes, inputPropertiesTypes }: NewInputType) {
	const mask = defineMasks(inputDataTypes);
	const component = defineComponent(inputDataTypes);
	const type = defineType(inputDataTypes);

	return (
		<NewInputContainer>
			{component === 'combo-input' && (
				<FormControl isRequired={inputPropertiesTypes.isRequired}>
					<FormLabel>{inputPropertiesTypes.label}</FormLabel>
					<ComboInput inputPropertiesTypes={inputPropertiesTypes} mask={mask}>
						<Option>Option</Option>
						<Option>Option</Option>
						<Option>Option</Option>
						<Option>Option</Option>
						<Option>Option</Option>
					</ComboInput>
					<FormHelperText>{inputPropertiesTypes.formHelperText}</FormHelperText>
				</FormControl>
			)}
			{component === 'text-area' && (
				<FormControl isRequired={inputPropertiesTypes.isRequired}>
					<FormLabel>{inputPropertiesTypes.label}</FormLabel>
					<Textarea
						as={InputMask}
						mask={mask}
						type='text'
						placeholder={inputPropertiesTypes.placeholder}
						defaultValue={inputPropertiesTypes.initialValue}
					/>
					<FormHelperText>{inputPropertiesTypes.formHelperText}</FormHelperText>
				</FormControl>
			)}
			{component === 'input' && (
				<FormControl isRequired={inputPropertiesTypes.isRequired}>
					<FormLabel>{inputPropertiesTypes.label}</FormLabel>
					<Input
						as={InputMask}
						mask={mask}
						type={type}
						placeholder={inputPropertiesTypes.placeholder}
						defaultValue={inputPropertiesTypes.initialValue}
					/>
					<FormHelperText>{inputPropertiesTypes.formHelperText}</FormHelperText>
				</FormControl>
			)}
		</NewInputContainer>
	);
}
