import React from 'react';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Collections } from './pages/Collections'
import { AddToCollection } from './pages/AddToCollection'
import { ProtectedRoutes } from './ProtectedRoutes';

export const routes = [
  { path: '/', element: <Collections />, access: 'guest' },
  { path: '/add-to-collection', element: <AddToCollection />, access: 'guest' }
].map((route: any) => {
  if (route.access !== 'guest') {
    return { ...route, element: <ProtectedRoutes access={route.access} outlet={route.element} /> }
  }
  return route;
})

export const GlobalRoutes = () => {
  const router: RouteObject[] = routes;
  return useRoutes(router);
}
