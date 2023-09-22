import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './app/styles/theme/theme';
import { CreateForms } from './pages/CreateForms';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ChakraProvider>
				<CreateForms />
			</ChakraProvider>
		</ThemeProvider>
	);
}

export default App;
