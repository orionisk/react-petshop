import discountAnimals from '@/assets/discount-animals.png';

import { DiscountForm } from './DiscountForm';

export const HomeDiscount = () => {
  return (
    <section className='container py-5 max-xl:px-2 lg:py-10'>
      <div className='flex flex-col rounded-xl bg-vivid-blue px-4 pt-4 lg:px-8 xl:min-h-[486px]'>
        <h3 className='text-center font-bold text-white max-xl:text-[clamp(1.5rem,5vw,4rem)]/tight xl:text-[64px]'>
          5% off on the first order
        </h3>
        <div className='mt-auto grid sm:grid-cols-2 lg:grid-cols-[2.85fr_2fr]'>
          <img
            className='self-end max-lg:size-full max-lg:object-cover sm:max-lg:object-[75%]'
            src={discountAnimals}
            alt='discount animals'
          />
          <DiscountForm />
        </div>
      </div>
    </section>
  );
};
