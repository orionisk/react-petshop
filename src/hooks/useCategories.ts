import { useQuery } from '@tanstack/react-query';

import { fetchAllCategories } from '@/store/apiActions';
import { Category } from '@/types';

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchAllCategories,
    refetchInterval: 60000
  });
};
