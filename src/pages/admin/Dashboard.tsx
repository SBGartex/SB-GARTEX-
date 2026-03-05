import { storage } from '../../lib/storage';
import { FileText, Users, Image as ImageIcon, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const posts = storage.getPosts();
  const partners = storage.getPartners();
  const portfolio = storage.getPortfolio();

  const stats = [
    { label: 'Total Posts', value: posts.length, icon: FileText, color: 'bg-blue-500' },
    { label: 'Global Partners', value: partners.length, icon: Users, color: 'bg-green-500' },
    { label: 'Portfolio Items', value: portfolio.length, icon: ImageIcon, color: 'bg-purple-500' },
    { label: 'Monthly Views', value: '12.5k', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-navy-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600 border-b border-gray-100 pb-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p>New partner "Fashion Brand A" added</p>
              <span className="ml-auto text-xs text-gray-400">2h ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 border-b border-gray-100 pb-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <p>Updated "Summer Collection" portfolio</p>
              <span className="ml-auto text-xs text-gray-400">5h ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <p>New blog post "Sustainability" published</p>
              <span className="ml-auto text-xs text-gray-400">1d ago</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-navy-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors text-navy-900 font-medium text-sm">
              Add New Post
            </button>
            <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors text-navy-900 font-medium text-sm">
              Upload Image
            </button>
            <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors text-navy-900 font-medium text-sm">
              Update Settings
            </button>
            <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors text-navy-900 font-medium text-sm">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
