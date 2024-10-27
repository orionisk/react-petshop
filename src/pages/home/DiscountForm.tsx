import { zodResolver } from '@hookform/resolvers/zod';
import { TriangleAlert } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { z } from 'zod';

import { FormTooltip } from '@/components/common/FormTooltip';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCouponRequest } from '@/hooks/useShopQuery';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  phone: z.string().min(8, {
    message: 'Phone number must be at least 8 characters.'
  }),
  email: z.string().email({
    message: 'Email must be a valid email address.'
  })
});

const formFields = [
  { name: 'name', placeholder: 'Name' },
  { name: 'phone', placeholder: 'Phone number' },
  { name: 'email', placeholder: 'Email' }
];

export const DiscountForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: ''
    }
  });

  const { mutate, isPending, isSuccess, isError } = useCouponRequest();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  const getButtonText = () => {
    if (isSuccess) return 'Request submitted';
    if (isError) return 'Error, try again';
    if (isPending) return 'Submitting...';
    return 'Get a discount';
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mt-4 flex flex-col gap-3 px-2.5 pb-4 lg:ml-6 lg:mt-5 lg:gap-4'
      >
        {formFields.map(field => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof z.infer<typeof formSchema>}
            render={({ field: fieldProps }) => (
              <FormItem className='relative'>
                <FormControl>
                  {field.name === 'phone' ? (
                    <NumericFormat
                      customInput={Input}
                      {...fieldProps}
                      onValueChange={values => {
                        fieldProps.onChange(values.value);
                      }}
                      className='h-12 w-full rounded-md border border-white bg-transparent px-4 py-2 text-lg font-medium text-white outline-none placeholder:font-medium placeholder:text-white md:h-[58px] md:px-8 md:py-4 md:text-xl'
                      placeholder={field.placeholder}
                      allowNegative={false}
                      decimalScale={0}
                    />
                  ) : (
                    <Input
                      className='h-12 w-full rounded-md border border-white bg-transparent px-4 py-2 text-lg font-medium text-white outline-none placeholder:font-medium placeholder:text-white md:h-[58px] md:px-8 md:py-4 md:text-xl'
                      placeholder={field.placeholder}
                      {...fieldProps}
                    />
                  )}
                </FormControl>
                {form.formState.errors[
                  field.name as keyof z.infer<typeof formSchema>
                ] && (
                  <FormTooltip
                    content={
                      form.formState.errors[
                        field.name as keyof z.infer<typeof formSchema>
                      ]?.message
                    }
                    side='left'
                    className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                  >
                    <TriangleAlert className='size-7 text-red-300' />
                  </FormTooltip>
                )}
              </FormItem>
            )}
          />
        ))}
        <Button
          className='max-lg:h-12 lg:mt-4'
          variant='banner'
          size='card'
          type='submit'
          disabled={isPending || isSuccess}
        >
          {getButtonText()}
        </Button>
      </form>
    </Form>
  );
};
