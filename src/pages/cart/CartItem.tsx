import { Link } from 'react-router-dom';

import { QuantitySelector } from '@/components/common/QuantitySelector';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove
}) => {
  return (
    <div className='relative flex gap-4 rounded-md border border-light-gray max-sm:flex-col sm:pr-3 lg:gap-2 xl:gap-8 xl:pr-5'>
      <Link
        to={`/products/${item.id}`}
        className='shrink-0 max-sm:self-center sm:h-[180px] sm:w-[200px]'
      >
        <img
          src={item.image}
          alt={item.title}
          className='h-full w-full rounded-md object-cover'
        />
      </Link>
      <div className='flex-grow max-sm:px-3 max-sm:pb-3 sm:pt-3 xl:pt-4'>
        <div className='flex items-center justify-between gap-2'>
          <Link to={`/products/${item.id}`}>
            <h3 className='text-xl font-semibold'>{item.title}</h3>
          </Link>
          <Button
            variant='square'
            size='unset'
            className='size-8 self-start border-none max-xl:pr-4 xl:size-10'
            onClick={() => onRemove(item.id)}
          >
            ×
          </Button>
        </div>
        <div className='mt-3 flex items-center gap-7 xs:gap-3 sm:mt-6 lg:gap-7'>
          <QuantitySelector
            value={item.quantity}
            onChange={value => onQuantityChange(item.id, value)}
            className='max-xs:[&_input]:w-10 '
          />
          <div className='flex items-end gap-4'>
            <span className='text-3xl font-bold xs:text-4xl sm:text-[40px]/normal'>
              ${item.discont_price || item.price}
            </span>
            {item.discont_price && item.price > item.discont_price && (
              <span className='text-base text-medium-gray line-through sm:pb-2 sm:text-xl'>
                ${item.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
