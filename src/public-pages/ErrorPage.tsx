import { isRouteErrorResponse, useRouteError } from 'react-router';
import StickyNavbar from '../components/StickyNavbar';

const ErrorPage = () => {
  const error = useRouteError();
  // Add error logging service here
  return (
    <>
      <StickyNavbar />
      <main id="main">
        <div className="relative min-h-screen bg-gradient-to-br from-sky-50 to-gray-200  dark:from-gray-700 dark:to-gray-900">
          <div className="flex min-h-screen flex-col">
            <div className="w-100 my-auto sm:m-auto sm:max-w-[30rem]">
              <h1 className="mt-4 text-center text-3xl font-extrabold leading-[3.5rem] tracking-tight text-slate-900 dark:text-gray-200 sm:text-5xl">
                {isRouteErrorResponse(error) ? '404' : 'ERROR'}
              </h1>
              <p className="mt-4 text-center text-lg text-slate-700 dark:text-gray-200">
                {isRouteErrorResponse(error)
                  ? 'PAGE NOT FOUND'
                  : 'Unexpected error'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
