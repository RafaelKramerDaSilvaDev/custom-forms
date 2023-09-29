import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { InputPropertiesTypes } from '../../../pages/CreateForms/types';
import { Input } from '../Input';
import { useComboInput } from './ComboInputContext';
import { Combo, Container, OptionsBox, Structure } from './styles';

type ComboInputProps = {
	inputPropertiesTypes: InputPropertiesTypes;
	mask: string;
	children: React.ReactNode;
};

export function ComboInput({ inputPropertiesTypes, mask, children }: ComboInputProps) {
	const { setValue } = useComboInput();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement | null>(null);

	// Função para lidar com o clique fora do componente
	const handleClickOutside = (event: MouseEvent) => {
		if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		// Adiciona o evento de clique ao body
		document.body.addEventListener('click', handleClickOutside as any, true);

		return () => {
			// Remove o evento ao desmontar o componente
			document.body.removeEventListener('click', handleClickOutside as any, true);
		};
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<Container ref={containerRef}>
			<Structure>
				<Combo onClick={() => setIsOpen(!isOpen)}>
					<MdKeyboardArrowDown size={20} />
				</Combo>
				<Input inputPropertiesTypes={inputPropertiesTypes} onChange={handleInputChange} mask={mask} />
			</Structure>
			{isOpen && <OptionsBox>{children}</OptionsBox>}
		</Container>
	);
}
