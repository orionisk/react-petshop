import React from 'react';

import Instagram from '@/assets/ic-instagram.svg?react';
import Whatsapp from '@/assets/ic-whatsapp.svg?react';

export const Footer: React.FC = () => {
  return (
    <footer className='mt-auto py-4 max-xl:px-2 lg:py-8 xl:pb-12'>
      <div className='container'>
        <h2 className='font-bold max-lg:text-[clamp(1.75rem,6vw,4rem)]/tight lg:text-[64px]'>
          Contact
        </h2>
        <div className='mt-3 grid gap-4 xs:grid-cols-[2.85fr_2fr] xl:mt-7 xl:gap-8'>
          <div className='rounded-xl bg-whisper-gray p-4 lg:p-8 lg:pb-5'>
            <h4 className='text-sm font-semibold text-medium-gray md:text-xl'>
              Phone
            </h4>
            <p className='mt-2 text-lg font-semibold md:text-2xl lg:text-[40px]/tight'>
              <a href='tel:+493091588492'>+49 30 915-88492</a>
            </p>
          </div>
          <div className='rounded-xl bg-whisper-gray p-4 lg:p-8 lg:pb-5'>
            <h4 className='text-sm font-semibold text-medium-gray md:text-xl'>
              Socials
            </h4>
            <div className='mt-2 flex gap-4 text-xl font-semibold md:text-2xl lg:mt-4 lg:text-[40px] lg:leading-tight'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                className='inline-flex lg:gap-4'
              >
                <Instagram className='size-8 lg:size-11' />
              </a>
              <a
                href='https://wa.me/'
                target='_blank'
                className='inline-flex lg:gap-4'
              >
                <Whatsapp className='size-8 lg:size-11' />
              </a>
            </div>
          </div>
          <div className='rounded-xl bg-whisper-gray p-4 lg:p-8 lg:pb-5'>
            <h4 className='text-sm font-semibold text-medium-gray md:text-xl'>
              Address
            </h4>
            <p className='mt-2 text-lg font-semibold leading-tight sm:text-xl md:text-2xl lg:text-[40px] lg:leading-tight'>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </p>
          </div>
          <div className='rounded-xl bg-whisper-gray p-4 lg:p-8 lg:pb-5'>
            <h4 className='text-sm font-semibold text-medium-gray md:text-xl'>
              Working Hours
            </h4>
            <p className='mt-2 text-lg font-semibold sm:text-xl md:text-2xl lg:text-[40px] lg:leading-tight'>
              24 hours a day
            </p>
          </div>
        </div>
        <div className='mt-5 lg:mt-10'>
          <iframe
            className='w-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.230264000714!2d13.404643399999998!3d52.51117179999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27db3d613b%3A0x8fa6d253500b289f!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sch!4v1729800866653!5m2!1sen!2sch'
            width='1360'
            height='350'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </footer>
  );
};
