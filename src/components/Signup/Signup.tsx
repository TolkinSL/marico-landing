import styles from './Signup.module.css';
export default function Signup() {
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>Sign up</h1>
      <p className={styles.description}>
        Fill all field for create an account.
      </p>
    </div>
  );
}
