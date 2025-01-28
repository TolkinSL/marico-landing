import styles from './Main.module.css';
import CaptionSvg from '../../assets/mainCaption.svg?react';
export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>Own your audience.</h1>
      <CaptionSvg />
    </div>
  );
}
