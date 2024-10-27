import { useCallback,useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

export function useFilterControls() {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortOption, setSortOption] = useState('default');

  const debouncedPriceFrom = useDebounce(priceFrom, 300);
  const debouncedPriceTo = useDebounce(priceTo, 300);

  const handlePriceFromChange = useCallback((value: string) => {
    setPriceFrom(value);
  }, []);

  const handlePriceToChange = useCallback((value: string) => {
    setPriceTo(value);
  }, []);

  return {
    priceFrom,
    priceTo,
    discountedOnly,
    sortOption,
    debouncedPriceFrom,
    debouncedPriceTo,
    handlePriceFromChange,
    handlePriceToChange,
    setDiscountedOnly,
    setSortOption
  };
}
