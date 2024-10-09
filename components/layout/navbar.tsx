import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbar__container}>
        <Link href="/" className={styles.navbar__logo}>
          <Image src="/logo.png" height={40} width={40} alt="Bambino logo" />
          <p>Bambino</p>
        </Link>
        <ul className={styles.navbar__links}>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
