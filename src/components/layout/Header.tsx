import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/assets/logo.svg?react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { CartIcon } from '../common/CartIcon';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Main Page' },
    { to: '/categories', text: 'Categories' },
    { to: '/products', text: 'All products' },
    { to: '/sales', text: 'All sales' }
  ];

  const closeSheet = () => setIsOpen(false);

  return (
    <header className='bg-white max-lg:px-4'>
      <div className='container flex items-center justify-between py-4 lg:py-7'>
        <div className='text-2xl font-bold'>
          <Link to='/'>
            <Logo className='size-[60px] lg:size-[70px]' />
          </Link>
        </div>
        <nav className='flex gap-4 max-sm:hidden lg:gap-7'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className='text-lg text-charcoal-gray transition-colors duration-200 hover:text-vivid-blue lg:text-xl'
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
          <CartIcon />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='sm:hidden'>
              <Button className='[&_svg]:size-6'>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <nav className='mt-8 flex flex-col gap-4'>
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className='text-lg text-charcoal-gray transition-colors duration-200 hover:text-vivid-blue'
                    onClick={closeSheet}
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
