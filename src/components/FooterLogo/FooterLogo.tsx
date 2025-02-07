import styles from './HeaderLogo.module.css';
import LogoSvg from '../../assets/logoSmall.svg?react';

export default function HeaderLogo() {
  return (
    <div className={styles.logo}>
      <LogoSvg />
      Marico
    </div>
  );
}
