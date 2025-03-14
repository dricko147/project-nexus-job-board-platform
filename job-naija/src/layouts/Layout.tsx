import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import styles from '../styles/Layout.module.css';
import BackToTopButton from '../components/BackToTopButton';
const Layout = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main_content}>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;