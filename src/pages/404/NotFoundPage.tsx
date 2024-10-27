import { Link } from 'react-router-dom';

import notFound from '@/assets/404.png';
import { Button } from '@/components/ui/button';

export const NotFoundPage = () => {
  return (
    <section className='py-10 lg:pt-20'>
      <div className='container flex flex-col items-center'>
        <img src={notFound} alt='not found' />
        <h1 className='mt-5 text-[64px] font-bold'>Page Not Found</h1>
        <p className='max-w-2xl text-center text-xl text-medium-gray'>
          We’re sorry, the page you requested could not be found.
        </p>
        <p className='max-w-2xl text-center text-xl text-medium-gray'>
          Please go back to the homepage.
        </p>
        <Button asChild className='mt-7 px-11' variant='card' size='card'>
          <Link to='/'>Go to home</Link>
        </Button>
      </div>
    </section>
  );
};
