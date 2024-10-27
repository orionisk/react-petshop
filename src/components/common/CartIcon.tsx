import { Link } from 'react-router-dom';

import Basket from '@/assets/basket.svg?react';
import { useCartStore } from '@/store/cartStore';

export const CartIcon = () => {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to='/cart' className='relative'>
      <Basket className='size-8 sm:size-10 lg:size-12' />
      {itemCount > 0 && (
        <span className='absolute left-0 top-2 flex size-6 items-center justify-center rounded-full bg-vivid-blue text-xs font-medium text-white lg:size-[26px] xl:font-bold'>
          {itemCount}
        </span>
      )}
    </Link>
  );
};
