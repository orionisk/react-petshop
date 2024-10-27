import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { AddToCartButton } from '@/components/common/AddToCartButton';
import { API_URL } from '@/config/config';
import { Product } from '@/types';

export const ProductItem = memo(({ product }: { product: Product }) => {
  const hasDiscount = !!product.discont_price;

  return (
    <Link
      to={`/products/${product.id}`}
      className='group relative overflow-hidden rounded-xl border border-light-gray pb-2 max-xs:w-[300px] xs:pb-3 xl:min-h-[422px] xl:pb-5'
    >
      {hasDiscount && (
        <div className='absolute right-2 top-2 z-40 flex w-[66px] items-center justify-center rounded-md bg-vivid-blue text-lg font-semibold text-white xl:right-4 xl:top-4 xl:h-[34px] xl:text-xl'>
          <p className='text-white'>
            -
            {Math.ceil(
              ((product.price - product.discont_price!) / product.price) * 100
            )}
            %
          </p>
        </div>
      )}
      <div className='relative flex border-b border-light-gray'>
        <div className='absolute inset-0 flex items-center justify-center bg-light-gray'>
          <Loader2 className='animate-spin text-medium-gray' size={30} />
        </div>
        <LazyLoadImage
          src={`${API_URL}${product.image}`}
          alt={product.title}
          effect='opacity'
          className='relative z-10 size-full object-cover'
          wrapperClassName='w-full min-h-[15vhmax] relative'
        />
        <AddToCartButton
          product={product}
          quantity={1}
          className='absolute bottom-6 left-1/2 z-10 w-[calc(100%-2rem)] -translate-x-1/2 transform opacity-0 transition-all focus-visible:opacity-100 group-hover:opacity-100'
        />
      </div>
      <div className='px-2 md:px-4 xl:px-8'>
        <h3 className='mt-2 truncate text-lg font-medium md:text-xl xl:mt-4'>
          {product.title}
        </h3>
        <div className='flex gap-2 md:gap-4 xl:mt-2 xl:gap-6'>
          <p className='text-3xl font-semibold text-charcoal-gray md:text-4xl lg:mt-2 xl:text-[40px]'>
            ${hasDiscount ? product.discont_price : product.price}
          </p>
          {hasDiscount && (
            <p className='self-end text-lg font-medium text-medium-gray line-through md:text-xl xl:mb-2.5'>
              ${product.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
});
