import styles from '../styles/Container.module.css';
import { ReactNode } from 'react';

const Container = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${styles.container} ${
        className === 'no_pad' ? styles.no_pad : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Container;