import axios from 'redaxios';

import { API_URL } from '@/config/config';
import {
  Category,
  OrderData,
  PersonalData,
  Product,
  ProductWithCategory
} from '@/types';

export const fetchAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(`${API_URL}/categories/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all categories:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (
  categoryId: Category['id']
): Promise<ProductWithCategory> => {
  try {
    const response = await axios.get(`${API_URL}/categories/${categoryId}`);
    if (response.data?.status === 'ERR') throw new Error('Category not found');
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error);
    throw error;
  }
};

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId: Product['id']) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    if (response.data?.status === 'ERR') throw new Error('Product not found');
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

export const sendOrder = async (orderData: OrderData) => {
  try {
    const response = await axios.post(`${API_URL}/order/send`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error sending order:', error);
    throw error;
  }
};

export const sendCouponRequest = async (couponData: PersonalData) => {
  try {
    const response = await axios.post(`${API_URL}/sale/send`, couponData);
    return response.data;
  } catch (error) {
    console.error('Error sending coupon request:', error);
    throw error;
  }
};
