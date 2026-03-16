import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import AdminOrders from './pages/AdminOrders';
import AdminProducts from './pages/AdminProducts';
import AdminServices from './pages/AdminServices';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="services" element={<Services />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="services" element={<AdminServices />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;