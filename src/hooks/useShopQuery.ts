import { useMutation, useQuery } from '@tanstack/react-query';

import {
  fetchAllProducts,
  fetchProductById,
  fetchProductsByCategory,
  sendCouponRequest,
  sendOrder
} from '@/store/apiActions';
import {
  Category,
  OrderData,
  PersonalData,
  Product,
  ProductWithCategory
} from '@/types';

type UseProductsOptions = {
  filterWithDiscount?: boolean;
};

export const useProducts = (
  { filterWithDiscount = false }: UseProductsOptions = {
    filterWithDiscount: false
  }
) => {
  return useQuery<Product[]>({
    queryKey: ['products', { filterWithDiscount }],
    queryFn: fetchAllProducts,
    refetchInterval: 60000,
    select: data => {
      if (filterWithDiscount) {
        return data.filter(product => product.discont_price > 0);
      }
      return data;
    }
  });
};

export const useCategoryProducts = (categoryId: Category['id'] | undefined) => {
  return useQuery<ProductWithCategory>({
    queryKey: ['products', 'category', categoryId],
    queryFn: () => fetchProductsByCategory(categoryId!),
    refetchInterval: 60000,
    enabled: !!categoryId,
    retry: 1
  });
};

export const useProduct = (productId: Product['id'] | undefined) => {
  return useQuery<Product[]>({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId!),
    enabled: !!productId,
    retry: 1
  });
};

export const useCouponRequest = () => {
  return useMutation<PersonalData, Error, PersonalData>({
    mutationFn: (data: PersonalData) => sendCouponRequest(data)
  });
};

export const useSendOrder = () => {
  return useMutation<OrderData, Error, OrderData>({
    mutationFn: (data: OrderData) => sendOrder(data)
  });
};
