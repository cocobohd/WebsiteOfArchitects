import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header.component';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="bg-light-gray h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
