import { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

import { PublicRoutes } from '../enums/router.enum.ts';
import Layout from '../components/wrappers/layout.component.tsx';
import Test from '../components/test.component.tsx';

interface RouterItem {
  path: string;
  element: JSX.Element;
  children?: RouterItem[];
}

const routerElements: RouterItem[] = [
  {
    path: PublicRoutes.TEST_PATH,
    element: <Test />,
  },
  {
    path: PublicRoutes.ABOUT_PATH,
    element: <div>About</div>,
  },
];

const renderRoute = ({ path, element, children }: RouterItem): RouteObject => ({
  path: path,
  element: <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>,
  children: children?.map(renderRoute),
});

export const routes: RouteObject[] = [
  {
    path: PublicRoutes.HOME_PATH,
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: routerElements.map(renderRoute),
  },
];
