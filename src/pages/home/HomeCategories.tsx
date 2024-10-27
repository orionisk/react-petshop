import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CategoryItem } from '@/components/common/CategoryItem';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { Button } from '@/components/ui/button';
import { useCategories } from '@/hooks/useCategories';

export const HomeCategories = () => {
  const { data: categories, isError, isLoading } = useCategories();

  return (
    <section className='container py-5 max-xl:px-2 md:py-5 lg:py-10 xl:py-16'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold max-lg:text-[clamp(1.75rem,6vw,4rem)]/tight lg:text-[64px]'>
          Categories
        </h2>
        <div className='ml-3 flex w-full items-center justify-between lg:ml-6'>
          <div className='h-[1px] w-full bg-light-gray' />
          <Button variant='nav' size='nav' asChild>
            <Link to='/categories'>All categories</Link>
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div className='mt-5 flex min-h-80 items-center justify-center'>
          <Loader2 className='h-12 w-12 animate-spin' />
        </div>
      ) : isError ? (
        <ErrorMessage message={"Sorry, we couldn't load the categories."} />
      ) : (
        <div className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 xl:mt-7 xl:gap-8'>
          {categories?.slice(0, 4)?.map(category => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};
