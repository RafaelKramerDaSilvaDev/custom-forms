import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ComboInputProvider } from './app/components/ComboInput/ComboInputContext';
import { router } from './app/routes/router';
import { GlobalStyle } from './app/styles/GlobalStyle';
import { theme } from './app/styles/theme/theme';

function App() {
	return (
		<ComboInputProvider>
			<ThemeProvider theme={theme}>
				<ChakraProvider>
					<RouterProvider router={router} />
				</ChakraProvider>
				<GlobalStyle />
			</ThemeProvider>
		</ComboInputProvider>
	);
}

export default App;
