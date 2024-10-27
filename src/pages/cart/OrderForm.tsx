import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useSendOrder } from '@/hooks/useShopQuery';
import { useCartStore } from '@/store/cartStore';

import { OrderDialog } from './OrderDialog';
import { OrderFormFields } from './OrderFormFields';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  phone: z.string().min(8, {
    message: 'Phone number must be at least 8 characters.'
  }),
  email: z.string().email({
    message: 'Email must be a valid email address.'
  }),
  products: z.array(z.any())
});

type OrderFormData = z.infer<typeof formSchema>;

export const OrderForm = () => {
  const navigate = useNavigate();
  const { items: products, clearCart } = useCartStore();
  const { mutate, isPending, isSuccess } = useSendOrder();
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      products: []
    }
  });

  const handleDialog = (value: boolean) => {
    setDialogOpen(value);

    if (value === false) {
      form.reset();
      clearCart();
      navigate('/');
    }
  };

  const handleSubmit = (data: OrderFormData) => {
    const productsData = products.map(item => ({
      id: item.id,
      quantity: item.quantity
    }));
    const orderData = {
      ...data,
      products: productsData
    };
    mutate(orderData, {
      onSuccess: () => {
        setDialogOpen(true);
      },
      onError: () => {}
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='mt-8 grid gap-3 md:gap-4'
        >
          <OrderFormFields form={form} />
          <Button
            type='submit'
            variant='card'
            size='card'
            className='mt-3.5 w-full'
            disabled={
              useCartStore(state => state.items.length === 0) ||
              isPending ||
              isSuccess
            }
          >
            {isPending ? 'Ordering...' : isSuccess ? 'Order Placed!' : 'Order'}
          </Button>
        </form>
      </Form>
      <OrderDialog open={dialogOpen} onOpenChange={handleDialog} />
    </>
  );
};
