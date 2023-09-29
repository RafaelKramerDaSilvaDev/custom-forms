import { FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { ComboInput } from '../../../../app/components/ComboInput';
import { Option } from '../../../../app/components/ComboInput/Option';
import { defineComponent, defineMasks, defineType } from '../../helpers';
import { InputComponentsTypes, InputTypes, NewInputType } from '../../types';
import { NewInputContainer } from './styles';
import { useState } from 'react';

export function NewInput({ inputDataTypes, inputPropertiesTypes }: NewInputType) {
	const [DDI, setDDI] = useState('');
	const mask = defineMasks({ type: inputDataTypes, value: DDI });
	const component: InputComponentsTypes = defineComponent(inputDataTypes);
	const type: InputTypes = defineType(inputDataTypes);
	const isPhone: boolean = inputDataTypes === 'Telefone';

	//

	type PhoneOptionsType = { id: number; value: string; text: string };

	const phoneOptions: PhoneOptionsType[] = [
		{ id: 1, value: '+55', text: '+55 Brasil' },
		{ id: 2, value: '+1', text: '+1 USA' },
		{ id: 3, value: '+44', text: '+44 UK' },
		{ id: 4, value: '+33', text: '+33 France' },
		{ id: 5, value: '+81', text: '+81 Japan' },
		{ id: 6, value: '+49', text: '+49 Germany' },
		{ id: 7, value: '+39', text: '+39 Italy' },
		{ id: 8, value: '+61', text: '+61 Australia' },
		{ id: 9, value: '+7', text: '+7 Russia' },
		{ id: 10, value: '+20', text: '+20 Egypt' },
		{ id: 11, value: '+91', text: '+91 India' },
		{ id: 12, value: '+86', text: '+86 China' },
		{ id: 13, value: '+34', text: '+34 Spain' },
		{ id: 14, value: '+27', text: '+27 South Africa' },
		{ id: 15, value: '+64', text: '+64 New Zealand' },
		{ id: 16, value: '+62', text: '+62 Indonesia' },
		{ id: 17, value: '+54', text: '+54 Argentina' },
		{ id: 18, value: '+52', text: '+52 Mexico' },
		{ id: 19, value: '+90', text: '+90 Turkey' },
		{ id: 20, value: '+84', text: '+84 Vietnam' },
	];

	//

	return (
		<NewInputContainer>
			{component === 'combo-input' && (
				<FormControl isRequired={inputPropertiesTypes.isRequired}>
					<FormLabel>{inputPropertiesTypes.label}</FormLabel>
					<ComboInput inputPropertiesTypes={inputPropertiesTypes} mask={mask}>
						{isPhone &&
							phoneOptions.map((option) => (
								<Option key={option.id} value={option.value} onClick={() => setDDI(option.value)}>
									{option.text}
								</Option>
							))}
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
