import { Link, Outlet, useLocation } from 'react-router-dom';

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <header className="header">
        <h1>Support Ticket System Lite</h1>
        <nav>
          <Link className={pathname === '/' ? 'active' : ''} to="/">Tickets</Link>
          <Link className={pathname === '/new' ? 'active' : ''} to="/new">Neues Ticket</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>React + Express + MongoDB • WEVE Praxisarbeit</small>
      </footer>
    </div>
  );
}
