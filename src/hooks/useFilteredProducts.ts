import { useMemo } from 'react';

import { Product } from '@/types';

export function useFilteredProducts(
  data: Product[] | undefined,
  filters: {
    debouncedPriceFrom: string;
    debouncedPriceTo: string;
    discountedOnly: boolean;
    sortOption: string;
  }
) {
  const { debouncedPriceFrom, debouncedPriceTo, discountedOnly, sortOption } =
    filters;

  return useMemo(() => {
    if (!data) return [];

    return data
      .filter((product: Product) => {
        const effectivePrice = product.discont_price || product.price;
        return (
          (debouncedPriceFrom === '' ||
            effectivePrice >= parseFloat(debouncedPriceFrom)) &&
          (debouncedPriceTo === '' ||
            effectivePrice <= parseFloat(debouncedPriceTo)) &&
          (!discountedOnly ||
            (product.discont_price && product.discont_price < product.price))
        );
      })
      .sort((a: Product, b: Product) => {
        const priceA = a.discont_price || a.price;
        const priceB = b.discont_price || b.price;
        switch (sortOption) {
          case 'newest':
            return (
              new Date(b.createdAt || '').getTime() -
              new Date(a.createdAt || '').getTime()
            );
          case 'price-high-low':
            return priceB - priceA;
          case 'price-low-high':
            return priceA - priceB;
          default:
            return 0;
        }
      });
  }, [data, debouncedPriceFrom, debouncedPriceTo, discountedOnly, sortOption]);
}
