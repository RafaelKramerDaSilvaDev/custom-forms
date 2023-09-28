import { HeaderButton, HeaderContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function Header() {
	const navigate = useNavigate();

	return (
		<HeaderContainer>
			<HeaderButton onClick={() => navigate('/')}>Home</HeaderButton>
			<HeaderButton onClick={() => navigate('/create-forms')}>Criar Formulário</HeaderButton>
			<HeaderButton onClick={() => navigate('/my-forms')}>Meus Formulários</HeaderButton>
			<HeaderButton onClick={() => navigate('/about')}>Sobre</HeaderButton>
		</HeaderContainer>
	);
}
