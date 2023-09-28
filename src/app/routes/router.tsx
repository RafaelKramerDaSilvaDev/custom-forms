import { createBrowserRouter } from 'react-router-dom';
import { About } from '../../pages/About';
import { CreateForms } from '../../pages/CreateForms';
import { Home } from '../../pages/Home';
import { MyForms } from '../../pages/MyForms';

export const router = createBrowserRouter([
	{
		path: '',
		element: <Home />,
	},
	{
		path: 'create-forms',
		element: <CreateForms />,
	},
	{
		path: 'my-forms',
		element: <MyForms />,
	},
	{
		path: 'about',
		element: <About />,
	},
]);
