import './index.scss';
import '@fontsource-variable/montserrat';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AnimatedOutlet } from '@/components/common/AnimatedOutlet';

import App from './App.tsx';
import {
  CartPage,
  CategoriesPage,
  CategoryPage,
  HomePage,
  NotFoundPage,
  ProductPage,
  ProductsPage,
  SalesPage
} from './pages';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AnimatedOutlet />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'categories', element: <CategoriesPage /> },
          { path: 'categories/:categoryId', element: <CategoryPage /> },
          { path: 'products/:productId', element: <ProductPage /> },
          { path: 'sales', element: <SalesPage /> },
          { path: 'cart', element: <CartPage /> },
          { path: '*', element: <NotFoundPage /> }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode='wait'>
        <RouterProvider router={router} />
      </AnimatePresence>
    </QueryClientProvider>
  </StrictMode>
);
