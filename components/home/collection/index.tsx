import { Product } from '@/app/lib/types';
import styles from './styles.module.scss';

type CollectionsParams = {
  products: Product[];
  isLoading: boolean;
};

export default function Collection({ products, isLoading }: CollectionsParams) {
  return (
    <section className={styles.collection}>
      <h2 className={styles.collection__header}>Collection</h2>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.collection__body}>
          {products?.length === 0 && (
            <h3 className={styles.collection__body__empty}>
              Collection is empty
            </h3>
          )}
          {products?.length > 0 && (
            <>
              <div>
                {products.map((product, index) => (
                  <p key={index}>{product.name}</p>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
