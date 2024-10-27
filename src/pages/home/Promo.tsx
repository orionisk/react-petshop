import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const Promo = () => {
  return (
    <section className='mx-auto min-h-[200px] max-w-[1440px] text-balance bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)),url("/promo.jpg")] bg-cover bg-no-repeat px-4 py-10 sm:min-h-[400px] sm:py-16 lg:min-h-[600px] lg:py-20'>
      <div className='container'>
        <h1 className='text-left font-bold leading-[1.15] text-white max-xl:text-[clamp(1.5rem,7vw,4rem)] xl:text-8xl/[1.15]'>
          Amazing Discounts on Pets Products!
        </h1>
        <Button
          asChild
          className='mt-5 px-4 md:px-14 lg:mt-10 lg:px-8 xl:w-[220px]'
          variant='card'
          size='card'
        >
          <Link to='/sales'>Check out</Link>
        </Button>
      </div>
    </section>
  );
};
