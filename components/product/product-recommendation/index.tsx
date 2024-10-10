import ProductCard from '../product-card';
import ProductSkeleton from '../product-skeleton';
import styles from './styles.module.scss';
import { Product } from '@/app/lib/types';

type ProductRecommendationParams = {
  products: Product[];
  isLoading: boolean;
};

export default function ProductRecommendation({
  products,
  isLoading,
}: ProductRecommendationParams) {
  return (
    <section className={styles.recommendation}>
      <h2 className={styles.recommendation__header}>People also viewed</h2>
      <div className={styles.recommendation__body}>
        {isLoading && (
          <div className={styles.recommendation__body__loading}>
            {[...Array(4)].map((_e, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}
        {!isLoading && products?.length === 0 && (
          <h3 className={styles.recommendation__body__empty}>
            Collection is empty
          </h3>
        )}
        {!isLoading && products?.length > 0 && (
          <div className={styles.recommendation__body__products}>
            {products.map((product) => (
              <ProductCard key={product.id} dataProduct={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
