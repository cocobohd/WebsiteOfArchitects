import { createBrowserRouter } from 'react-router-dom';

import { PublicRoutes } from '../enums/router.enum';
import { routes } from './routes';

export const router = createBrowserRouter(routes, {
  basename: PublicRoutes.HOME_PATH,
});
