import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index path="users" element={<Users />} />
          <Route index path="users/:userId" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
