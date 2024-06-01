import { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

import { PublicRoutes } from 'enums/router.enum.ts';

import Layout from 'components/wrappers/layout.component.tsx';

import { Main, Contacts, Gallery, Projects, Certifications } from './lazy.router';

interface RouterItem {
  path: string;
  element: JSX.Element;
  children?: RouterItem[];
}

const routerElements: RouterItem[] = [
  {
    path: PublicRoutes.HOME_PATH,
    element: <Main />,
  },
  {
    path: PublicRoutes.CONTACTS_PATH,
    element: <Contacts />,
  },
  {
    path: PublicRoutes.GALLERY_PATH,
    element: <Gallery />,
  },
  {
    path: PublicRoutes.PROJECTS_PATH,
    element: <Projects />,
  },
  {
    path: PublicRoutes.CERTIFICATION_PATH,
    element: <Certifications />,
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
