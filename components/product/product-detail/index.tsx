import React from 'react';
import styles from './styles.module.scss';
import { rupiahFormatter } from '@/app/lib/helpers';
import Image from 'next/image';
import { Product } from '@/app/lib/types';

type ProductDetailParams = {
  dataProduct: Product;
};

export default function ProductDetail({ dataProduct }: ProductDetailParams) {
  return (
    <section className={styles.detail}>
      <div className={styles.detail__container}>
        <Image
          src={dataProduct.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          alt="children running"
          style={{ width: '100%', height: 'auto' }}
          className={styles.detail__container__image}
        />

        <section className={styles.detail__container__main}>
          <section className={styles.detail__container__main__product}>
            <h2>{dataProduct.name}</h2>
            <p>{rupiahFormatter(dataProduct.price)}</p>
          </section>

          <section className={styles.detail__container__main__quantity}>
            <p>Quantity</p>
            <div className={styles.detail__container__main__quantity__input}>
              <button>-</button>
              <input type="number" name="quantity" id="quantity" />
              <button>+</button>
            </div>
            <button
              className={styles.detail__container__main__quantity__submit}
            >
              Add to cart
            </button>
          </section>

          <section className={styles.detail__container__main__share}>
            <p>Share</p>
            <ul className={styles.detail__container__main__share__links}>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </section>
        </section>

        <section className={styles.detail__container__aside}>
          <h3 className={styles.detail__container__aside__title}>Overview</h3>
          <p className={styles.detail__container__aside__description}>
            {dataProduct.overview ?? 'No overview information'}
          </p>
          <h3 className={styles.detail__container__aside__title}>Materials</h3>
          <p className={styles.detail__container__aside__description}>
            {dataProduct.materials ?? 'No materials information'}
          </p>
        </section>
      </div>
    </section>
  );
}
