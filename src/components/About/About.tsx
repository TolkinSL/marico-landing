import styles from './About.module.css';
import AboutLogo from '../AboutLogo/AboutLogo';
export default function About() {
  return (
    <div className={styles.main}>
      <AboutLogo />
      <h1 className={styles.caption}>OUR MISSION</h1>
      <h2 className={styles.subCaption}>
        We exist to help creators own their audience.
      </h2>
      <p className={styles.description}>
        We believe that social platforms are taking advantage of creators. We
        want to change that and help creators fight back.{' '}
      </p>
    </div>
  );
}
