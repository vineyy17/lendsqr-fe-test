import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/pages/AppLayout.scss';

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Sidebar />
      <main className="appLayout__main">
        <div className="appLayout__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
