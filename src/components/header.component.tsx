import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon } from 'assets/logo.icon';
import { twMerge } from 'tailwind-merge';

interface Navigation {
  path: string;
  name: string;
}

const navigation: Navigation[] = [
  {
    path: '/',
    name: 'main',
  },
  {
    path: '/gallery',
    name: 'gallery',
  },
  {
    path: '/projects',
    name: 'projects',
  },
  {
    path: '/certification',
    name: 'certification',
  },
  {
    path: '/contacts',
    name: 'contacts',
  },
];

const Header: FC = () => {
  const renderNavigation = (item: Navigation) => {
    const defaultStyles =
      'py-1 px-2 uppercase text-xs text-dark-gray font-normal border-y border-transparent hover:border-y-dark-gray transition-all';
    return (
      <li className="mr-10 last:mr-0" key={item.name}>
        <NavLink
          to={item.path}
          className={({ isActive }) => (isActive ? twMerge(defaultStyles, 'border-y-dark-gray') : defaultStyles)}
        >
          {item.name}
        </NavLink>
      </li>
    );
  };

  return (
    <header className="flex w-full py-7 px-32 justify-between items-center">
      <Link to="/">
        <LogoIcon />
      </Link>
      <ul className="flex">{navigation.map(renderNavigation)}</ul>
    </header>
  );
};

export default Header;
