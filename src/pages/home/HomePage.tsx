import { HomeCategories } from './HomeCategories';
import { HomeDiscount } from './HomeDiscount';
import { HomeSale } from './HomeSale';
import { Promo } from './Promo';

export const HomePage = () => {
  return (
    <>
      <Promo />
      <HomeCategories />
      <HomeDiscount />
      <HomeSale />
    </>
  );
};
