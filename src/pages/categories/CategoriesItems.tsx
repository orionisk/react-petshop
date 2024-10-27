import { CategoryItem } from '@/components/common/CategoryItem';
import { useCategories } from '@/hooks/useCategories';

export const CategoriesItems = () => {
  const { data: categories } = useCategories();
  return (
    <>
      {categories?.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </>
  );
};
