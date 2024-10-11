'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { IoCartOutline } from 'react-icons/io5';
import { useCartStore } from '@/app/store';
import { useMemo } from 'react';

export default function Navbar() {
  const { cart } = useCartStore((state) => state);
  const cartItemCounter = useMemo(() => {
    let counter = 0;
    cart.forEach((item) => (counter += item.quantity));
    return counter;
  }, [cart]);

  return (
    <div className={styles.navbar}>
      <nav className={styles.navbar__container}>
        <Link href="/" className={styles.navbar__logo}>
          <Image src="/logo.png" height={40} width={40} alt="Bambino logo" />
          <p>Bambino</p>
        </Link>
        <Link href="/cart" className={styles.navbar__cart}>
          <IoCartOutline fontSize={'24px'} />
          <span className={styles.navbar__cart__badge}>{cartItemCounter}</span>
        </Link>
      </nav>
    </div>
  );
}
