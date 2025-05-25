import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-800 text-white p-4">
        <nav className="flex flex-col gap-2">
          <Link to="/" className="hover:text-yellow-300">Login</Link>
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
          <Link to="/logs" className="hover:text-yellow-300">Attendance Logs</Link>
          <Link to="/analytics" className="hover:text-yellow-300">Analytics</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
// This Layout component serves as a wrapper for the main content of the application.
// It includes a sidebar with navigation links and a main content area where the routed components will be rendered.