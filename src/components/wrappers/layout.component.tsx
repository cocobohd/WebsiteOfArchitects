import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <main className="bg-background-gray h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
