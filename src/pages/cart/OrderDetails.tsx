import { CartItem } from '@/types';

interface OrderDetailsProps {
  cartItems: CartItem[];
}

export const OrderDetails = ({ cartItems }: OrderDetailsProps) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.discont_price ?? item.price) * item.quantity,
    0
  );

  return (
    <>
      <h2 className='mb-4 text-3xl font-bold sm:text-4xl xl:text-[40px]/[1.1]'>
        Order details
      </h2>
      <div className='mt-4 2xl:mt-8'>
        <p className='text-3xl font-medium text-medium-gray xl:text-4xl 2xl:text-[40px]/none'>
          {totalItems} items
        </p>
        <div className='flex items-end justify-between'>
          <p className='pb-1 text-3xl font-medium text-medium-gray xl:text-4xl 2xl:text-[40px]/none'>
            Total
          </p>
          <p className='mt-1 text-4xl font-bold xl:text-6xl 2xl:text-[64px]/[1.1]'>
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};
