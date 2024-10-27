import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: { [key: string]: string } = {
  '/': 'Home',
  '/categories': 'Categories',
  '/products': 'Products',
  '/sales': 'Sales',
  '/cart': 'Cart'
};

export const usePageTitle = (customTitle?: string) => {
  const location = useLocation();

  useEffect(() => {
    const setTitle = () => {
      if (customTitle) {
        document.title = `Shop | ${customTitle}`;
      } else {
        const pathTitle = pageTitles[location.pathname] || 'Shop';
        document.title = `Shop | ${pathTitle}`;
      }
    };

    setTitle();
  }, [location, customTitle]);
};
