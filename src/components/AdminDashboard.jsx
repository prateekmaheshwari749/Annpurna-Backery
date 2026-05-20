import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings,
  TrendingUp,
  DollarSign,
  Clock,
  ChevronRight,
  Plus,
  MoreVertical,
  Search,
  Bell
} from 'lucide-react';
import CandleFlame from './CandleFlame';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,456', change: '+12%', icon: DollarSign, trend: 'up' },
    { label: 'Orders Today', value: '48', change: '+8%', icon: ShoppingCart, trend: 'up' },
    { label: 'Active Products', value: '156', change: '+3', icon: Package, trend: 'up' },
    { label: 'Pending Orders', value: '12', change: '-2', icon: Clock, trend: 'down' },
  ];

  const recentOrders = [
    { id: '#2401', customer: 'Sarah Johnson', items: 3, total: '$42.50', status: 'Preparing' },
    { id: '#2400', customer: 'Michael Chen', items: 2, total: '$28.00', status: 'Ready' },
    { id: '#2399', customer: 'Emily Davis', items: 5, total: '$67.25', status: 'Delivered' },
    { id: '#2398', customer: 'James Wilson', items: 1, total: '$12.00', status: 'Preparing' },
  ];

  const topProducts = [
    { name: 'Classic Croissant', sales: 234, revenue: '$1,053' },
    { name: 'Sourdough Loaf', sales: 189, revenue: '$1,323' },
    { name: 'Chocolate Éclair', sales: 156, revenue: '$819' },
    { name: 'Cinnamon Roll', sales: 142, revenue: '$568' },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Package, label: 'Products', active: false },
    { icon: ShoppingCart, label: 'Orders', active: false },
    { icon: Users, label: 'Customers', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden lg:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-12 w-8 relative">
              <CandleFlame size="sm" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-semibold text-primary">La Douce</h1>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    item.active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">
              JD
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground text-sm">John Doe</p>
              <p className="text-xs text-muted-foreground">Manager</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl font-semibold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground text-sm">Welcome back, here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-secondary rounded-lg px-4 py-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm w-40"
                />
              </div>
              {/* Notifications */}
              <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
              {/* Add Product */}
              <button className="btn-bakery-primary text-sm px-4 py-2 hidden sm:flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="card-bakery p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="font-serif text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <TrendingUp className={`w-4 h-4 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600 rotate-180'
                  }`} />
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground text-sm">vs last week</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="card-bakery p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-semibold text-foreground">Recent Orders</h2>
                <button className="text-primary text-sm font-medium hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{order.customer}</p>
                        <p className="text-muted-foreground text-sm">{order.id} • {order.items} items</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{order.total}</p>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-700' :
                        order.status === 'Ready' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Products */}
            <div className="card-bakery p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-semibold text-foreground">Top Products</h2>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-medium text-foreground">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-muted-foreground text-sm">{product.sales} sales</p>
                    </div>
                    <p className="font-semibold text-primary">{product.revenue}</p>
                  </div>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-border">
                <button className="w-full btn-bakery-secondary text-sm py-2.5">
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;