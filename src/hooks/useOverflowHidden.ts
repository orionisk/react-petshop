import { useEffect } from 'react';

export function useOverflowHidden(isDevelopment: boolean) {
  useEffect(() => {
    if (isDevelopment) {
      document.documentElement.classList.add('[&::-webkit-scrollbar]:hidden');
    } else {
      document.documentElement.classList.remove(
        '[&::-webkit-scrollbar]:hidden'
      );
    }

    return () => {
      document.documentElement.classList.remove(
        '[&::-webkit-scrollbar]:hidden'
      );
    };
  }, [isDevelopment]);
}
