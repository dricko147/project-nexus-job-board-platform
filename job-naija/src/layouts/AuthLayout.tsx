import { Outlet } from 'react-router-dom';
import styles from '../styles/Layout.module.css';
import Footer from '../components/Footer';
import { ImSphere } from 'react-icons/im';
const AuthLayout = () => {
  return (
    <div className={styles.App}>
      <header className={styles.auth_header}>
        
          <ImSphere />
          JOB NAIJA
      
      </header>
      <main className={styles.main_content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;