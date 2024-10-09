import Image from 'next/image';
import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="https://im.uniqlo.com/global-cms/spa/resd6ff774fc9c6f8d3062d4a823cea5da6fr.jpg"
        width={0}
        height={0}
        sizes="100vw"
        alt="children running"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className={styles.hero__text_container}>
        <h1>Bambino</h1>
        <h3>{`Comfort for your little one's journey.`}</h3>
      </div>
    </section>
  );
}
