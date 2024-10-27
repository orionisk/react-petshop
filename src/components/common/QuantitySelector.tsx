import { NumericFormat } from 'react-number-format';

import Minus from '@/assets/minus.svg?react';
import Plus from '@/assets/plus.svg?react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max = 99,
  className
}: QuantitySelectorProps) => {
  const handleIncrement = () => onChange(Math.min(max, value + 1));
  const handleDecrement = () => onChange(Math.max(min, value - 1));

  return (
    <div className={cn('flex items-center', className)}>
      <Button
        variant='square'
        size='square'
        className='max-lg:[&_svg]:w-3 lg:[&_svg]:w-4'
        onClick={handleDecrement}
      >
        <Minus />
      </Button>
      <NumericFormat
        customInput={Input}
        className='h-10 w-16 text-center text-xl font-semibold text-charcoal-gray lg:h-[58px] lg:w-16 xl:w-[86px]'
        value={value}
        onValueChange={values => {
          const { floatValue } = values;
          onChange(floatValue ? Math.min(max, Math.max(min, floatValue)) : min);
        }}
        allowNegative={false}
        decimalScale={0}
        isAllowed={values => {
          const { floatValue } = values;
          return (
            floatValue === undefined || (floatValue >= min && floatValue <= max)
          );
        }}
      />
      <Button variant='square' size='square' onClick={handleIncrement}>
        <Plus />
      </Button>
    </div>
  );
};
