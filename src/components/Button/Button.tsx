import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'social' | 'price' | 'priceSelected';
  size:
    | 'size_207'
    | 'size_283'
    | 'size_313'
    | 'size_454'
    | 'size_472'
    | 'size_488';
  children: React.ReactNode;
}
export default function Button(props: ButtonProps) {
  const { type, size, children } = props;

  const buttonBorder = cn(styles.button, {
    [styles.buttonPrimary]: type === 'primary',
    [styles.buttonSecondary]: type === 'secondary',
    [styles.buttonSocial]: type === 'social',
    [styles.buttonPrice]: type === 'price',
    [styles.buttonPriceSelected]: type === 'priceSelected',
    [styles.size_207]: size === 'size_207',
    [styles.size_283]: size === 'size_283',
    [styles.size_313]: size === 'size_313',
    [styles.size_454]: size === 'size_454',
    [styles.size_472]: size === 'size_472',
    [styles.size_488]: size === 'size_488',
  });

  return <button className={buttonBorder}>{children}</button>;
}
