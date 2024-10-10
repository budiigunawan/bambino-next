import styles from './styles.module.scss';

export default function ProductSkeleton() {
  return (
    <div className={styles.product_skeleton}>
      <div
        className={styles.product_skeleton__header + ' skeleton skeleton-text'}
      ></div>
      <h3 className={styles.product_skeleton__body}>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </h3>
      <div className={styles.product_skeleton__footer}>
        <p className="skeleton skeleton-text skeleton-footer"></p>
      </div>
    </div>
  );
}
