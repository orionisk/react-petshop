import { Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useCategoryProducts, useProduct } from '@/hooks/useShopQuery';

import { ProductDetails } from './ProductDetails';
import { ProductImages } from './ProductImages';

export const ProductPage = () => {
  const { productId } = useParams();

  const {
    data: productArray,
    isError: isProductError,
    isLoading: isProductLoading
  } = useProduct(Number(productId));
  const product = productArray?.[0];
  const { data: categoryData } = useCategoryProducts(product?.categoryId);
  const { title: categoryTitle, id: categoryId } = categoryData?.category || {};

  usePageTitle(product?.title);

  const isError = isProductError;

  const isLoading = isProductLoading;

  const errorMessage =
    "Sorry, we couldn't find the product you're looking for.";

  return (
    <section className='container py-5 max-xl:px-2 lg:py-10'>
      <Breadcrumbs
        items={[
          { label: 'Main page', path: '/' },
          { label: 'Categories', path: '/categories' },
          { label: categoryTitle || '', path: `/categories/${categoryId}` },
          { label: product?.title || '' }
        ]}
      />
      {isLoading ? (
        <div className='mt-5 flex min-h-80 items-center justify-center'>
          <Loader2 className='h-12 w-12 animate-spin' />
        </div>
      ) : isError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <div className='mt-5 grid gap-4 max-lg:content-center lg:grid-cols-[1.2fr_1fr] xl:mt-9 xl:grid-cols-[1.41fr_1fr] xl:gap-8'>
          <ProductImages
            images={
              product?.image
                ? [product.image, product.image, product.image, product.image]
                : []
            }
          />
          <ProductDetails product={product} />
        </div>
      )}
    </section>
  );
};
