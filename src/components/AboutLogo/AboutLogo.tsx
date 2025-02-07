import styles from './AboutLogo.module.css';
import LogoSvg from '../../assets/logoAbout.svg?react';

export default function AboutLogo() {
  return (
    <div className={styles.logo}>
      <LogoSvg />
      Marico
    </div>
  );
}
