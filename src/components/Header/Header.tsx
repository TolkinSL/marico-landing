import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import cn from 'classnames';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

export default function Header() {
  return (
    <div className={styles.header}>
      <HeaderLogo />
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(styles.link, { [styles.link_active]: isActive })
          }
        >
          Use Cases
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            cn(styles.link, { [styles.link_active]: isActive })
          }
        >
          About
        </NavLink>
      </nav>
      <div className={styles.loginNav}>
        <NavLink
          to="login"
          className={({ isActive }) =>
            cn(styles.buttonLogin, {
              [styles.buttonLogin_active]: isActive,
            })
          }
        >
          Login
        </NavLink>
        <NavLink
          to="signup"
          className={({ isActive }) =>
            cn(styles.buttonLogin, {
              [styles.buttonLogin_active]: isActive,
            })
          }
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}
