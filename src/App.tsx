import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './app/routes/router';
import { theme } from './app/styles/theme/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</ThemeProvider>
	);
}

export default App;
