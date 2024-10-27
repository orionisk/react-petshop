import { TriangleAlert } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { FormTooltip } from '@/components/common/FormTooltip';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { OrderData } from '@/types';

const formFields = [
  { name: 'name', placeholder: 'Name' },
  { name: 'phone', placeholder: 'Phone number' },
  { name: 'email', placeholder: 'Email' }
];

export const OrderFormFields = ({
  form
}: {
  form: UseFormReturn<OrderData>;
}) => (
  <>
    {formFields.map(field => (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name as keyof OrderData}
        render={({ field: fieldProps }) => (
          <FormItem className='relative'>
            <FormControl>
              {field.name === 'phone' ? (
                <NumericFormat
                  customInput={Input}
                  {...fieldProps}
                  value={fieldProps.value as string}
                  onValueChange={values => {
                    fieldProps.onChange(values.value);
                  }}
                  className='h-12 w-full rounded-md border border-light-gray bg-white px-8 py-4 text-xl font-medium text-medium-gray outline-none placeholder:font-medium placeholder:text-medium-gray md:h-[58px] md:px-8 md:py-4 md:text-xl'
                  placeholder={field.placeholder}
                  allowNegative={false}
                  decimalScale={0}
                />
              ) : (
                <Input
                  className='h-12 w-full rounded-md border border-light-gray bg-white px-8 py-4 text-xl font-medium text-medium-gray outline-none placeholder:font-medium placeholder:text-medium-gray md:h-[58px] md:px-8 md:py-4 md:text-xl'
                  placeholder={field.placeholder}
                  {...fieldProps}
                  value={
                    typeof fieldProps.value === 'string' ? fieldProps.value : ''
                  }
                />
              )}
            </FormControl>
            {form.formState.errors[field.name as keyof OrderData] && (
              <FormTooltip
                content={
                  form.formState.errors[field.name as keyof OrderData]?.message
                }
                side='right'
                className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
              >
                <TriangleAlert className='size-7 text-red-500' />
              </FormTooltip>
            )}
          </FormItem>
        )}
      />
    ))}
  </>
);
