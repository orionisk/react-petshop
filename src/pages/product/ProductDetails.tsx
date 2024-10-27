import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AddToCartButton } from '@/components/common/AddToCartButton';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/types';
import { truncateDescription } from '@/utils/utils';

import { QuantitySelector } from '../../components/common/QuantitySelector';
import { ProductPricing } from './ProductPricing';

interface ProductDetailsProps {
  product: Product | undefined;
}

export const ProductDetails: React.FC<ProductDetailsProps> = React.memo(
  ({ product }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const { items, updateQuantity } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const maxDescriptionLength = 683;

    const cartItem = useMemo(
      () => items.find(item => item.id === product?.id),
      [items, product?.id]
    );

    useEffect(() => {
      if (cartItem) {
        setQuantity(cartItem.quantity);
      } else {
        setQuantity(1);
      }
    }, [cartItem]);

    const handleQuantityChange = useCallback(
      (newQuantity: number) => {
        setQuantity(newQuantity);
        if (cartItem) {
          updateQuantity(cartItem.id, newQuantity);
        }
      },
      [cartItem, updateQuantity]
    );

    const truncatedDescription = useMemo(
      () =>
        product?.description
          ? truncateDescription(product.description, maxDescriptionLength)
          : '',
      [product?.description, maxDescriptionLength]
    );

    return (
      <div>
        <h1 className='max-w-lg text-2xl font-bold xs:text-3xl md:text-4xl xl:text-[40px]/[1.1]'>
          {product?.title}
        </h1>
        <ProductPricing product={product} />
        <div className='mt-3 flex items-center gap-7 lg:mt-6'>
          <QuantitySelector value={quantity} onChange={handleQuantityChange} />
          {product && (
            <AddToCartButton
              product={product}
              quantity={quantity}
              className='w-32 sm:w-48 lg:w-full'
            />
          )}
        </div>
        <div className='mt-4 lg:mt-8'>
          <p className='text-xl font-semibold'>Description</p>
          <p className='mt-3.5 leading-[1.3] text-charcoal-gray'>
            {showFullDescription ? product?.description : truncatedDescription}
          </p>
          {product?.description &&
            product.description.length > maxDescriptionLength && (
              <Button
                onClick={() => setShowFullDescription(prev => !prev)}
                variant='readMore'
                size='readMore'
                className='mt-4 lg:mt-8'
              >
                {showFullDescription ? 'Read Less' : 'Read More'}
              </Button>
            )}
        </div>
      </div>
    );
  }
);
