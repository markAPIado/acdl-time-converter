import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './public-pages/ErrorPage';
import HomePage from './public-pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [{ path: '/', element: <HomePage /> }]
  }
]);

export default router;
