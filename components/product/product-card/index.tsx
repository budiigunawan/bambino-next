import Link from 'next/link';
import styles from './styles.module.scss';
import { Product } from '@/app/lib/types';
import Image from 'next/image';
import { rupiahFormatter } from '@/app/lib/helpers';

type ProductCardParams = {
  dataProduct: Product;
};

export default function ProductCard({ dataProduct }: ProductCardParams) {
  return (
    <div className={styles.product_card}>
      <Link href={`products/${dataProduct.slug}`}>
        <div className={styles.product_card__header}>
          <Image
            src={dataProduct.imageUrl}
            alt={dataProduct.slug}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className={styles.product_card__header__title}>
            {dataProduct.name}
          </div>
        </div>
        <div className={styles.product_card__body}>
          <p>{rupiahFormatter(dataProduct.price)}</p>
        </div>
      </Link>
    </div>
  );
}
