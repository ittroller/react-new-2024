import { createBrowserRouter, RouteObject } from 'react-router-dom';

import HomePage from '@src/pages/home';
import AboutPage from '@src/pages/about';
import GuidePage from '@src/pages/guide';

import UsersPage from '@src/pages/dashboard/users';
import PostsPage from '@src/pages/dashboard/posts';

type CustomRouteObject = RouteObject & {
  roles?: string[];
};

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    roles: [],
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/guide',
    element: <GuidePage />,
  },
  {
    path: '/dashboard',
    children: [
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
