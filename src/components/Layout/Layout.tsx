import styles from './Layout.module.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <h1>Layout</h1>
      <Header />
      <Outlet />
    </div>
  );
}
