import { Loader2 } from 'lucide-react';

import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { ProductsView } from '@/components/common/ProductsView';
import { useProducts } from '@/hooks/useShopQuery';

export const SalesPage = () => {
  const { data, isLoading, isError } = useProducts({
    filterWithDiscount: true
  });

  const errorMessage =
    "Sorry, we couldn't load the discounted products you're looking for.";

  return (
    <section className='container py-5 max-xl:px-2 lg:py-10'>
      <Breadcrumbs
        items={[{ label: 'Main page', path: '/' }, { label: 'All sales' }]}
      />
      {isLoading ? (
        <div className='mt-5 flex min-h-80 items-center justify-center'>
          <Loader2 className='h-12 w-12 animate-spin' />
        </div>
      ) : isError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <ProductsView
          title='Discounted items'
          products={data || []}
          initialDiscountedOnly
        />
      )}
    </section>
  );
};
