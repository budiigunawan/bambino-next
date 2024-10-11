'use client';
import { useCartStore } from '../store';
import styles from './styles.module.scss';

export default function Cart() {
  const { cart } = useCartStore((state) => state);

  return (
    <section className={styles.cart}>
      <h2 className={styles.cart__header}>Cart Item List</h2>
      {cart.length == 0 && <p>Cart Kosong</p>}
      {cart.length > 0 && (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <p>
                {`${item.product.name}, `}{' '}
                <strong>{`quantity: ${item.quantity}`}</strong>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
