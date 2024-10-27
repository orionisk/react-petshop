import { Product } from '@/types';

interface ProductPricingProps {
  product: Product | undefined;
}

export const ProductPricing = ({ product }: ProductPricingProps) => {
  const hasDiscount = !!product?.discont_price;

  return (
    <div className='flex gap-4'>
      <p className='mt-4 text-4xl font-bold text-charcoal-gray md:text-5xl lg:text-[64px]/tight'>
        ${hasDiscount ? product.discont_price : product?.price}
      </p>
      {hasDiscount && (
        <p className='self-end text-lg font-medium text-medium-gray line-through sm:text-xl lg:ml-4 lg:text-[40px]/normal'>
          ${product.price}
        </p>
      )}
      {hasDiscount && (
        <div className='mt-2 flex h-6 w-14 items-center justify-center rounded-md bg-vivid-blue font-semibold text-white lg:mt-5 lg:h-[34px] lg:w-[63px] lg:text-xl'>
          <p className='text-white'>
            -
            {Math.ceil(
              ((product.price - product.discont_price!) / product.price) * 100
            )}
            %
          </p>
        </div>
      )}
    </div>
  );
};
