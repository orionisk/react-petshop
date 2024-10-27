import { Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { ProductsView } from '@/components/common/ProductsView';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useCategoryProducts } from '@/hooks/useShopQuery';

export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data, isError, isLoading } = useCategoryProducts(
    categoryId ? Number(categoryId) : undefined
  );

  usePageTitle(data?.category?.title);

  const errorMessage =
    "Sorry, we couldn't find the category you're looking for.";

  return (
    <section className='container py-5 max-xl:px-2 lg:py-10'>
      <Breadcrumbs
        items={[
          { label: 'Main page', path: '/' },
          { label: 'Categories', path: '/categories' },
          { label: data?.category?.title || '' }
        ]}
      />
      {isLoading ? (
        <div className='mt-5 flex min-h-80 items-center justify-center'>
          <Loader2 className='h-12 w-12 animate-spin' />
        </div>
      ) : isError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <ProductsView
          title={data?.category?.title || ''}
          products={data?.data || []}
        />
      )}
    </section>
  );
};
