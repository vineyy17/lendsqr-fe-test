import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="users" />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
