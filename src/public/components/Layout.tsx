import { Outlet } from 'react-router-dom';
import StickyNavbar from './StickyNavbar';

export default function Layout() {
  return (
    <>
      <StickyNavbar />
      <main id="main" className="-mt-16">
        <div className="relative min-h-screen bg-gradient-to-br from-sky-50 to-gray-200  dark:from-gray-700 dark:to-gray-900">
          <div className="flex min-h-[800px] flex-col">
            <div className="mx-auto mt-24 sm:max-w-[96rem]">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
