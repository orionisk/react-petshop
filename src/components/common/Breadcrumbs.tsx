import React from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

interface BreadcrumbItemProps {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemProps[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => (
  <Breadcrumb
    className={cn(
      'max-md:[&_ol::-webkit-scrollbar]:hidden max-md:[&_ol]:overflow-x-scroll',
      className
    )}
  >
    <BreadcrumbList>
      {items.map(
        (item, index) =>
          item.label && (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.path ? (
                  <BreadcrumbLink
                    asChild
                    className='font-medium hover:bg-whisper-gray'
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className='font-medium'>
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && (
                <BreadcrumbSeparator className='separator' />
              )}
            </React.Fragment>
          )
      )}
    </BreadcrumbList>
  </Breadcrumb>
);
