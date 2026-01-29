'use client'

import { PRODUCTS } from '@/constants';
import ProductCard from '../../ui/ProductCard';
import styles from './Catalog.module.css';

const Catalog = () => {
  return (
    <section id="catalog" className={styles.catalog}>
      <div className={styles.container}>
        <span className={styles.label}>Наша продукция</span>
        <h2 className={styles.title}>Выберите свой размер</h2>
        <p className={styles.subtitle}>
          Премиум качество для вашего бизнеса. Все размеры в наличии
        </p>

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
