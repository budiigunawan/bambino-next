import { Product } from '@/app/lib/types';
import styles from './styles.module.scss';
import ProductSkeleton from '@/components/product/product-skeleton';

type CollectionsParams = {
  products: Product[];
  isLoading: boolean;
};

export default function Collection({ products, isLoading }: CollectionsParams) {
  return (
    <section className={styles.collection}>
      <h2 className={styles.collection__header}>Collection</h2>
      <div className={styles.collection__body}>
        {isLoading && (
          <div className={styles.collection__body__loading}>
            {[...Array(8)].map((_e, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}
        {!isLoading && products?.length === 0 && (
          <h3 className={styles.collection__body__empty}>
            Collection is empty
          </h3>
        )}
        {!isLoading && products?.length > 0 && (
          <>
            <div>
              {products.map((product, index) => (
                <p key={index}>{product.name}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
