import { Breadcrumbs } from '@/components/common/Breadcrumbs';

import { CategoriesItems } from './CategoriesItems';

export const CategoriesPage = () => {
  return (
    <section className='container py-2 max-xl:px-2 sm:py-5 lg:py-10'>
      <Breadcrumbs
        items={[{ label: 'Main page', path: '/' }, { label: 'Categories' }]}
      />
      <div className='py-3 lg:py-5'>
        <h2 className='font-bold max-lg:text-[clamp(1.75rem,6vw,4rem)]/tight lg:text-[64px]'>
          Categories
        </h2>
        <div className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 xl:mt-7 xl:gap-8'>
          <CategoriesItems />
        </div>
      </div>
    </section>
  );
};
