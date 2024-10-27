import { useAutoAnimate } from '@formkit/auto-animate/react';

import { cn } from '@/lib/utils';
import { CartItem as CartItemType } from '@/types';

import { CartItem } from './CartItem';

interface CartItemListProps extends React.HTMLAttributes<HTMLDivElement> {
  cartItems: CartItemType[];
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export const CartItemList = ({
  cartItems,
  onQuantityChange,
  onRemove,
  className
}: CartItemListProps) => {
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className={cn('grid content-start gap-4', className)}>
      {cartItems?.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};
