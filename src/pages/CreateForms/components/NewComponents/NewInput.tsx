import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { ComboInput } from '../../../../app/components/ComboInput';
import { Option } from '../../../../app/components/ComboInput/Option';
import { phoneOptions } from '../../constants/phoneOptions';
import { defineComponent, defineMasks, defineType, removeMask } from '../../helpers';
import { InputComponentsTypes, InputTypes, NewInputType } from '../../types';
import { CPFValidate } from '../../validators/CPFValidate';
import { NewInputContainer } from './styles';

export function NewInput({ inputDataTypes, inputPropertiesTypes }: NewInputType) {
	const [DDIPhone, setDDIPhone] = useState('');
	const [isError, setIsError] = useState(true);
	const mask = defineMasks({ type: inputDataTypes, value: DDIPhone });
	const component: InputComponentsTypes = defineComponent(inputDataTypes);
	const type: InputTypes = defineType(inputDataTypes);
	const isPhone: boolean = inputDataTypes === 'Telefone';

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		const CPFWithoutMask = removeMask(newValue);
		const validatedCPF = CPFValidate(CPFWithoutMask);
		setIsError(!validatedCPF);
	};

	return (
		<NewInputContainer>
			{component === 'combo-input' && (
				<FormControl isRequired={inputPropertiesTypes.isRequired}>
					<FormLabel>{inputPropertiesTypes.label}</FormLabel>
					<ComboInput inputPropertiesTypes={inputPropertiesTypes} mask={mask}>
						{isPhone &&
							phoneOptions.map((option) => (
								<Option key={option.id} value={option.value} onClick={() => setDDIPhone(option.value)}>
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
				<FormControl isRequired={inputPropertiesTypes.isRequired} isInvalid={isError}>
					<FormLabel>{inputPropertiesTypes.label}</FormLabel>
					<Input
						as={InputMask}
						mask={mask}
						type={type}
						placeholder={inputPropertiesTypes.placeholder}
						defaultValue={inputPropertiesTypes.initialValue}
						onBlur={handleInputChange}
					/>
					{!isError ? (
						<FormHelperText>{inputPropertiesTypes.formHelperText}</FormHelperText>
					) : (
						<FormErrorMessage>{inputPropertiesTypes.label} inválido. Verifique os dados inseridos.</FormErrorMessage>
					)}
				</FormControl>
			)}
		</NewInputContainer>
	);
}
