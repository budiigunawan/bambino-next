'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { rupiahFormatter } from '@/app/lib/helpers';
import { Product } from '@/app/lib/types';
import { useCartStore } from '@/app/store';

type ProductDetailParams = {
  dataProduct: Product;
  isLoading: boolean;
};

export default function ProductDetail({
  dataProduct,
  isLoading,
}: ProductDetailParams) {
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCart, cart } = useCartStore((state) => state);

  const handlePlus = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleMinus = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleBlur = () => {
    if (!quantity) {
      setQuantity(1);
    } else if (quantity > dataProduct.stock) {
      setQuantity(dataProduct.stock);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      product: dataProduct,
      quantity,
    });
  };

  return (
    <section className={styles.detail}>
      <div className={styles.detail__container}>
        {isLoading ? (
          <div
            className={
              styles.detail__container__image_skeleton +
              ' skeleton skeleton-text'
            }
          ></div>
        ) : (
          <Image
            src={dataProduct?.imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            alt="children running"
            style={{ width: '100%', height: 'auto' }}
            className={styles.detail__container__image}
          />
        )}

        <section className={styles.detail__container__main}>
          <section className={styles.detail__container__main__product}>
            {isLoading ? (
              <>
                <h2>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text"></div>
                </h2>
                <p className="skeleton skeleton-text skeleton-header"></p>
              </>
            ) : (
              <>
                <h2>{dataProduct?.name}</h2>
                <p>{rupiahFormatter(dataProduct?.price)}</p>
              </>
            )}
          </section>

          <section className={styles.detail__container__main__quantity}>
            {isLoading ? (
              <>
                <p className="skeleton skeleton-text skeleton-header"></p>
                <p className="skeleton skeleton-text skeleton-header"></p>
                <div className="skeleton skeleton-text"></div>
              </>
            ) : (
              <>
                <p>Quantity</p>
                <p>{JSON.stringify(cart)}</p>
                <div
                  className={styles.detail__container__main__quantity__input}
                >
                  <button onClick={handleMinus} disabled={quantity === 1}>
                    -
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    min={1}
                    max={dataProduct.stock}
                  />
                  <button
                    onClick={handlePlus}
                    disabled={quantity === dataProduct?.stock}
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.detail__container__main__quantity__submit}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </>
            )}
          </section>

          <section className={styles.detail__container__main__share}>
            {isLoading ? (
              <>
                <p className="skeleton skeleton-text skeleton-header"></p>
                <p className="skeleton skeleton-text skeleton-header"></p>
              </>
            ) : (
              <>
                <p>Share</p>
                <ul className={styles.detail__container__main__share__links}>
                  <li>
                    <a
                      href={`https://twitter.com/share?url=https://evermos.budigunawan.com/products/${dataProduct?.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`http://facebook.com/share.php?u=https://evermos.budigunawan.com/products/${dataProduct?.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareFacebook />
                    </a>
                  </li>
                </ul>
              </>
            )}
          </section>
        </section>

        <section className={styles.detail__container__aside}>
          {isLoading ? (
            <>
              <h3 className="skeleton skeleton-text skeleton-header"></h3>
              <p className="skeleton skeleton-text"></p>
              <p className="skeleton skeleton-text"></p>
              <p className="skeleton skeleton-text"></p>
              <h3 className="skeleton skeleton-text skeleton-header"></h3>
              <p className="skeleton skeleton-text"></p>
              <p className="skeleton skeleton-text"></p>
              <p className="skeleton skeleton-text"></p>
            </>
          ) : (
            <>
              <h3 className={styles.detail__container__aside__title}>
                Overview
              </h3>
              <p className={styles.detail__container__aside__description}>
                {dataProduct?.overview ?? 'No overview information'}
              </p>
              <h3 className={styles.detail__container__aside__title}>
                Materials
              </h3>
              <p className={styles.detail__container__aside__description}>
                {dataProduct?.materials ?? 'No materials information'}
              </p>
            </>
          )}
        </section>
      </div>
    </section>
  );
}
