import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="app-container">
      <header>
        <h1>STARV PERFORMANCE</h1>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/cart">Корзина</Link>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;