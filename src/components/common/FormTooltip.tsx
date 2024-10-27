import React, { useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface FormTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  className?: string;
}

export const FormTooltip: React.FC<FormTooltipProps> = ({
  content,
  children,
  side = 'right',
  sideOffset = 5,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = (open?: boolean) => {
    setIsOpen(prev => open ?? !prev);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={isOpen}>
        <TooltipTrigger asChild>
          <button
            type='button'
            className={`cursor-pointer focus:outline-none ${className}`}
            onMouseEnter={() => toggleTooltip(true)}
            onMouseLeave={() => toggleTooltip(false)}
            onTouchStart={e => {
              e.preventDefault();
              toggleTooltip();
            }}
            onClick={() => toggleTooltip()}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                toggleTooltip();
              }
              if (e.key === 'Escape' || e.key === 'Tab') {
                toggleTooltip(false);
              }
            }}
          >
            {children}
          </button>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          className='max-w-[200px] break-words'
        >
          <span className='inline-block'>{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
