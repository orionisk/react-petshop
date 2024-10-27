import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/keyboard';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import type { Swiper as SwiperType } from 'swiper';
import { Keyboard, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { API_URL } from '@/config/config';
import { cn } from '@/lib/utils';

export const ProductImages = ({
  images,
  className
}: {
  images: string[];
  className?: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div
      className={cn(
        'flex gap-2 sm:gap-4 lg:gap-8 max-lg:justify-self-center lg:self-start',
        className
      )}
    >
      <div className='shrink-0 max-xs:hidden xl:w-[200px]'>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          direction='vertical'
          watchSlidesProgress={true}
          modules={[Thumbs, Keyboard]}
          keyboard={{ enabled: true }}
          className='h-[300px] max-xl:w-32 max-sm:w-24 sm:h-96 xl:h-[572px] [&_.swiper-slide-thumb-active]:!border-[#339933] [&_.swiper-slide]:rounded-xl [&_.swiper-slide]:border [&_.swiper-slide]:border-light-gray'
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className='overflow-hidden transition-colors duration-300'
            >
              <div className='relative h-full w-full'>
                <div className='absolute inset-0 flex items-center justify-center bg-light-gray'>
                  <Loader2
                    className='animate-spin text-medium-gray'
                    size={30}
                  />
                </div>
                <LazyLoadImage
                  src={`${API_URL}${image}`}
                  alt={`Product thumbnail ${index + 1}`}
                  effect='opacity'
                  className='relative z-10 h-full w-full object-cover'
                  wrapperClassName='h-full w-full'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='max-sm:max-w-[300px] max-xs:h-[300px] sm:w-[448px] xl:h-[572px] xl:w-[548px]'>
        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[Thumbs, Keyboard]}
          keyboard={{ enabled: true }}
          className='h-full'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-full w-full'>
                <div className='absolute inset-0 flex items-center justify-center bg-light-gray'>
                  <Loader2
                    className='animate-spin text-medium-gray'
                    size={30}
                  />
                </div>
                <LazyLoadImage
                  src={`${API_URL}${image}`}
                  alt={`Product image ${index + 1}`}
                  effect='opacity'
                  className='relative z-10 h-full w-full object-cover'
                  wrapperClassName='h-full w-full'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
