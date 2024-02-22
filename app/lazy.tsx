import styles from './lazy.module.css'

export default function Lazy() {
    return (
      <div className={styles.background}>
        <p>This should be always red</p>
      </div>
    );
  }