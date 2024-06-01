import { lazy } from 'react';

export const Main = lazy(() => import('pages/main.page.tsx'));
export const Contacts = lazy(() => import('pages/contacts.page.tsx'));
export const Gallery = lazy(() => import('pages/gallery.page.tsx'));
export const Projects = lazy(() => import('pages/projects.page.tsx'));
export const Certifications = lazy(() => import('pages/certifications.page.tsx'));
