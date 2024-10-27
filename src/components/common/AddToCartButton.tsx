import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { API_URL } from '@/config/config';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { CartItem, Product } from '@/types';

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
  className?: string;
}

export const AddToCartButton = ({
  product,
  quantity,
  className = ''
}: AddToCartButtonProps) => {
  const { items, addItem, removeItem } = useCartStore();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(items.some(item => item.id === product.id));
  }, [items, product.id]);

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart) {
      removeItem(product.id);
    } else {
      const cartItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        discont_price: product.discont_price,
        quantity: quantity,
        image: `${API_URL}${product.image}`
      };
      addItem(cartItem);
    }
  };

  return (
    <Button
      onClick={handleCartAction}
      variant='card'
      size='card'
      data-active={isInCart}
      className={cn(className, isInCart && 'opacity-100')}
    >
      {isInCart ? 'Added' : 'Add to Cart'}
    </Button>
  );
};
