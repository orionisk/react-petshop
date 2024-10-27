import { NumericFormat } from 'react-number-format';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface FilterControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  priceFrom: string;
  setPriceFrom: (value: string) => void;
  priceTo: string;
  setPriceTo: (value: string) => void;
  discountedOnly: boolean;
  setDiscountedOnly: (value: boolean) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
  initialDiscountedOnly?: boolean;
}

export const FilterControls = ({
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  discountedOnly,
  setDiscountedOnly,
  sortOption,
  setSortOption,
  initialDiscountedOnly = false,
  className
}: FilterControlsProps) => (
  <div
    className={cn(
      'flex flex-wrap items-start md:items-center gap-2 xs:gap-6 lg:gap-10',
      className
    )}
  >
    <div className='flex gap-2 max-xs:items-center xs:max-md:flex-col md:items-center lg:gap-4'>
      <p className='font-semibold lg:text-xl'>Price</p>
      <div className='flex gap-2 lg:gap-4'>
        <NumericFormat
          customInput={Input}
          value={priceFrom}
          onValueChange={values => setPriceFrom(values.value)}
          thousandSeparator=','
          decimalSeparator='.'
          decimalScale={2}
          allowNegative={false}
          placeholder='from'
          className='max-w-20 rounded-md border border-light-gray px-2 py-1 md:max-w-24 lg:max-w-28 lg:px-4 lg:py-2'
        />
        <NumericFormat
          customInput={Input}
          value={priceTo}
          onValueChange={values => setPriceTo(values.value)}
          thousandSeparator=','
          decimalSeparator='.'
          decimalScale={2}
          allowNegative={false}
          placeholder='to'
          className='max-w-20 rounded-md border border-light-gray px-2 py-1 md:max-w-24 lg:max-w-28 lg:px-4 lg:py-2'
        />
      </div>
    </div>
    <div className='flex gap-2 max-md:flex-col lg:gap-10'>
      {!initialDiscountedOnly && (
        <div className='flex items-center gap-2 lg:gap-4'>
          <label htmlFor='discounted' className='font-semibold lg:text-xl'>
            Discounted items
          </label>
          <Checkbox
            id='discounted'
            checked={discountedOnly}
            onCheckedChange={checked => setDiscountedOnly(checked as boolean)}
          />
        </div>
      )}
      <div className='flex items-center gap-2 lg:gap-4'>
        <p className='font-semibold lg:text-xl'>Sorted</p>
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className='w-[180px] max-lg:h-[34px] max-lg:px-2 md:w-[200px]'>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='default'>by default</SelectItem>
            <SelectItem value='newest'>newest</SelectItem>
            <SelectItem value='price-high-low'>price: high-low</SelectItem>
            <SelectItem value='price-low-high'>price: low-high</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);
