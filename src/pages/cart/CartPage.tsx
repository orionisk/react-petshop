import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';

import { CartItemList } from './CartItemList';
import { OrderDetails } from './OrderDetails';
import { OrderForm } from './OrderForm';

export const CartPage = () => {
  const { items: cartItems, updateQuantity, removeItem } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('.', { replace: true });
    }
  }, [cartItems, navigate]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  return (
    <section className='container py-5 max-xl:px-2 lg:py-7'>
      <div className='flex items-center justify-between'>
        <h1 className='shrink-0 font-bold max-lg:text-[clamp(1.2rem,6vw,4rem)]/tight lg:text-[64px]'>
          Shopping cart
        </h1>
        <div className='ml-3 flex w-full items-center justify-between lg:ml-6'>
          <div className='h-[1px] w-full bg-light-gray' />
          <Button asChild variant='nav' size='nav'>
            <Link to='/products'>Back to the store</Link>
          </Button>
        </div>
      </div>
      {cartItems.length > 0 ? (
        <div className='mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.42fr_1fr] xl:mt-6 xl:grid-cols-[1.42fr_1fr] xl:gap-8'>
          <CartItemList
            className='max-lg:order-1'
            cartItems={cartItems}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
          <div className='rounded-xl bg-whisper-gray p-4 lg:p-6 xl:p-8'>
            <OrderDetails cartItems={cartItems} />
            <OrderForm />
          </div>
        </div>
      ) : (
        <div className='mt-6 min-h-20 lg:min-h-32'>
          <h2 className='font-medium sm:text-xl'>
            Looks like you have no items in your basket currently.
          </h2>
          <Button
            asChild
            variant='card'
            size='card'
            className='mt-8 lg:max-w-80 lg:px-14'
          >
            <Link to='/products'>Continue shopping</Link>
          </Button>
        </div>
      )}
    </section>
  );
};
