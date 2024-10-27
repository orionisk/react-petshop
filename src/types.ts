export type Category = {
  id: number;
  title: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discont_price: number;
  categoryId: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductWithCategory = {
  category: Category;
  data: Product[];
};

export type PersonalData = {
  name: string;
  phone: string;
  email: string;
};

export type OrderData = PersonalData & {
  products: { id: number; quantity: number }[];
};

export type CartItem = Omit<
  Product,
  'categoryId' | 'createdAt' | 'updatedAt' | 'description'
> & {
  quantity: number;
};
