import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <aside>
        <h3>Starv Admin</h3>
        <nav>
          <Link to="/admin/orders">Заявки</Link>
          <Link to="/admin/products">Товары</Link>
          <Link to="/admin/services">Услуги</Link>
          <hr />
          <Link to="/">На сайт</Link>
        </nav>
      </aside>

      <main>
        <header>
          <h2>Панель управления</h2>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;