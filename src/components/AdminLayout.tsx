import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Image as ImageIcon, LogOut, ShoppingBag } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Posts & News', path: '/admin/posts', icon: FileText },
    { name: 'Media & Gallery', path: '/admin/media', icon: ImageIcon },
    { name: 'Global Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-900 text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-turquoise-500 rounded-md flex items-center justify-center text-navy-900">
              <ShoppingBag size={20} strokeWidth={2.5} />
            </div>
            <span className="font-bold tracking-wider">SB ADMIN</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-turquoise-500 text-navy-900 font-medium' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg transition-all"
          >
            <LogOut size={20} />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <Outlet />
      </main>
    </div>
  );
}
