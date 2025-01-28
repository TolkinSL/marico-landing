import styles from './Main.module.css';
import CaptionSvg from '../../assets/mainCaption.svg?react';
import DotSmallSvg from '../../assets/dotGreenSmall.svg?react';
import Button from '../Button/Button';
export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>Own your audience.</h1>
      <CaptionSvg />
      <section className={styles.sectionTurn}>
        <p className={styles.sectionTurnTitle}>
          Turn your audience into email and text message subscribers.
        </p>
        <div className={styles.twoButton}>
          <Button type="primary" size="size_313">
            Get Started Now
          </Button>
          <Button type="secondary" size="size_313">
            View A Demo
          </Button>
        </div>
        <div className={styles.sectionTurnStat}>
          <DotSmallSvg />
          <p className={styles.sectionTurnNumber}>1000+</p>
          <p className={styles.sectionTurnDescription}>
            creators have already started
          </p>
        </div>
      </section>
      <section className={styles.sectionWhy}>
        <h2>Why Creators Love Marico</h2>
      </section>
    </div>
  );
}
