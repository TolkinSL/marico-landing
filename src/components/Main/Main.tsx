import styles from './Main.module.css';
import CaptionSvg from '../../assets/mainCaption.svg?react';
import Button from '../Button/Button';
export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>Own your audience.</h1>
      <CaptionSvg />
      <section>
        <p>Turn your audience into email and text message subscribers.</p>
        <div className={styles.twoButton}>
          <Button type="primary" size="size_313">
            Get Started Now
          </Button>
          <Button type="secondary" size="size_313">
            View A Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
