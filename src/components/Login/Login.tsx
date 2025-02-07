import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>Log in</h1>
      <p className={styles.description}>Login into existing account.</p>
    </div>
  );
}
