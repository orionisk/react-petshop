import { useAutoAnimate } from '@formkit/auto-animate/react';

import { FilterControls } from '@/components/common/FilterControls';
import { useFilterControls } from '@/hooks/useFilterControls';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import { Product } from '@/types';

import { ProductItem } from './ProductItem';

interface ProductsViewProps {
  title: string;
  products: Product[];
  initialDiscountedOnly?: boolean;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  title,
  products,
  initialDiscountedOnly = false
}) => {
  const [parent] = useAutoAnimate();

  const {
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
  } = useFilterControls();

  const filteredAndSortedProducts = useFilteredProducts(products, {
    debouncedPriceFrom,
    debouncedPriceTo,
    discountedOnly,
    sortOption
  });

  return (
    <div className='py-3 lg:py-5'>
      <h2 className='font-bold max-lg:text-[clamp(1.75rem,6vw,4rem)]/tight lg:text-[64px]'>
        {title}
      </h2>
      <FilterControls
        priceFrom={priceFrom}
        setPriceFrom={handlePriceFromChange}
        priceTo={priceTo}
        setPriceTo={handlePriceToChange}
        discountedOnly={discountedOnly}
        setDiscountedOnly={setDiscountedOnly}
        sortOption={sortOption}
        setSortOption={setSortOption}
        initialDiscountedOnly={initialDiscountedOnly}
        className='mt-3 lg:mt-6'
      />
      <ul
        ref={parent}
        className='mt-4 grid min-h-[422px] content-start gap-4 max-xs:place-content-center xs:grid-cols-2 sm:grid-cols-3 lg:mt-6 lg:grid-cols-4 xl:mt-9 xl:gap-8 [&_img]:h-[300px] sm:[&_img]:h-[205px] lg:[&_img]:h-[284px]'
      >
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found matching the current filters.</p>
        )}
      </ul>
    </div>
  );
};
