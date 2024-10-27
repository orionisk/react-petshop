import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ErrorMessage } from '@/components/common/ErrorMessage';
import { ProductItem } from '@/components/common/ProductItem';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useShopQuery';
import { Product } from '@/types';

export const HomeSale = () => {
  const {
    data: products,
    isLoading,
    isError
  } = useProducts({
    filterWithDiscount: true
  });

  const getRandomItems = (items: Product[], count: number) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <section className='container py-4 max-xl:px-2 xl:py-8'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold max-lg:text-[clamp(1.75rem,6vw,4rem)]/tight lg:text-[64px]'>
          Sale
        </h2>
        <div className='ml-6 flex w-full items-center justify-between'>
          <div className='h-[1px] w-full bg-light-gray'></div>
          <Button asChild variant='nav' size='nav'>
            <Link to='/sales'>All sales</Link>
          </Button>
        </div>
      </div>
      <div className='mt-6'>
        {isLoading ? (
          <div className='flex min-h-80 items-center justify-center'>
            <Loader2 className='h-12 w-12 animate-spin' />
          </div>
        ) : isError ? (
          <ErrorMessage message={"Sorry, we couldn't load the products."} />
        ) : (
          <div className='grid gap-4 max-xs:place-content-center xs:grid-cols-2 lg:grid-cols-4 xl:gap-8 [&_img]:h-[300px] xs:[&_img]:h-[205px] md:[&_img]:h-[284px]'>
            {products &&
              products.length > 0 &&
              getRandomItems(products, 4).map(product => (
                <ProductItem key={product.id} product={product} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};
