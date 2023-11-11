import SwitchThemeColor from './SwitchThemeColor';
import logo from '../assets/logo-128.png';
import { Link } from 'react-router-dom';

export default function StickyNavbar() {
  return (
    <nav className="sticky top-0 z-10 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 sm:items-stretch sm:justify-start">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Timy logo" />
              <h1 className="ml-4 text-xl font-black text-white">TIMY</h1>
            </Link>
          </div>
          <SwitchThemeColor />
        </div>
      </div>
    </nav>
  );
}
