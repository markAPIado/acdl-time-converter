import { createBrowserRouter } from 'react-router-dom';
import Layout from './public/components/Layout';
import ErrorPage from './public/error/ErrorPage';
import HomePage from './public/home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [{ path: '/', element: <HomePage /> }]
  }
]);

export default router;
