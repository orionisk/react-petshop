import { Loader2 } from 'lucide-react';

import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { ProductsView } from '@/components/common/ProductsView';
import { useProducts } from '@/hooks/useShopQuery';

export const ProductsPage = () => {
  const { data, isLoading, isError } = useProducts();

  const errorMessage =
    "Sorry, we couldn't load the products you're looking for.";

  return (
    <section className='container py-5 max-xl:px-2 lg:py-10'>
      <Breadcrumbs
        items={[{ label: 'Main page', path: '/' }, { label: 'All products' }]}
      />
      {isLoading ? (
        <div className='mt-5 flex min-h-80 items-center justify-center'>
          <Loader2 className='h-12 w-12 animate-spin' />
        </div>
      ) : isError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <ProductsView title='All products' products={data || []} />
      )}
    </section>
  );
};
