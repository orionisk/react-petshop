import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Loader2 } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { API_URL } from '@/config/config';
import { Category } from '@/types';

export const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <Link to={`/categories/${category.id}`} className='relative block'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <Loader2 className='animate-spin text-gray-400' size={30} />
      </div>
      <LazyLoadImage
        src={`${API_URL}${category.image}`}
        alt={category.title}
        effect='opacity'
        wrapperClassName='xl:w-[316px] max-sm:min-h-[20vh] h-auto sm:h-[336px] md:h-[195px] lg:h-[265px] xl:h-[350px] relative z-10'
      />
      <h3 className='mt-1 text-center font-medium sm:text-lg/tight lg:mt-2 xl:text-xl'>
        {category.title}
      </h3>
    </Link>
  );
};
