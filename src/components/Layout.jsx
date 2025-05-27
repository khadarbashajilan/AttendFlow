import { Outlet, Link } from 'react-router-dom';
import analytics from '../assets/analytics.svg'; 
import home from '../assets/home.svg'; 
import logout from '../assets/logout.png'; 
import menu from '../assets/calendar.png'; 


const Layout = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
      <aside className="p-2 outer container h-[200px] w-[200px] md:w-[250px] md:h-[600px] md:mt-12 m-4 bg-white shadow-md md:rounded-2xl flex-shrink-0">  
        <nav className="flex bg-transparent flex-col gap-4">
          <Link to="/" className="flex bg-transparent gap-2 hover:text-grey-800"><img src={logout} className='h-7 mt-2' /> <h1 className="mt-1 text-2xl">Logout</h1></Link>
          <Link to="/dashboard" className=" flex bg-transparent gap-2 hover:text-grey-800"><img src={home} className='h-6 mt-2' /> <h1 className="mt-1 text-2xl">Dashboard</h1></Link>
          <Link to="/logs" className="flex bg-transparent gap-2 hover:text-grey-800"><img src={menu} className='h-7 mt-2' /> <h1 className="mt-1 text-2xl">Attendance Logs</h1> </Link>
          <Link to="/analytics" className="flex bg-transparent gap-2 hover:text-grey-800"><img src={analytics} className='h-6 mt-2' /><h1 className="mt-1 text-2xl">Analytics</h1> </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gradient-to-br from-pink-1100/10 to-gray-200/10 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
// This Layout component serves as a wrapper for the main content of the application.
// It includes a sidebar with navigation links and a main content area where the routed components will be rendered.