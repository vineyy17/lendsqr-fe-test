import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/pages/AppLayout.scss';
import { useState } from 'react';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`appLayout ${isSidebarOpen ? 'appLayout--sideOpen' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      <main className="appLayout__main">
        <div className="appLayout__main__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
