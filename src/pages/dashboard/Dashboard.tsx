import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Home, 
  Plus, 
  FileText, 
  Palette, 
  CreditCard, 
  User, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { GlassCard, GlassButton } from '@/components/glass';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

export const Dashboard: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuthStore();

  const sidebarItems = [
    { icon: Home, label: 'Overview', href: '/dashboard', exact: true },
    { icon: Plus, label: 'New Order', href: '/dashboard/new-order' },
    { icon: FileText, label: 'Orders', href: '/dashboard/orders' },
    { icon: Palette, label: 'Brand Kit', href: '/dashboard/brand-kit' },
    { icon: CreditCard, label: 'Billing', href: '/dashboard/billing' },
    { icon: User, label: 'Account', href: '/dashboard/account' },
  ];

  const isActive = (href: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - 60sec Ads</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-dark">
        <div className="flex">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-64 min-h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl"
          >
            <div className="p-6">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">60</span>
                </div>
                <span className="text-white font-bold text-xl">60sec Ads</span>
              </Link>

              {/* User Info */}
              <GlassCard className="p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                    ) : (
                      <span className="text-white font-semibold text-sm">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate">
                      {user?.name || 'User'}
                    </p>
                    <p className="text-white/60 text-xs truncate">
                      {user?.email || 'user@example.com'}
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Navigation */}
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href, item.exact);
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200',
                        active
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Sign Out */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={signOut}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <motion.header
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-b border-white/10 bg-black/20 backdrop-blur-xl"
            >
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 max-w-lg">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search orders, projects..."
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="relative p-2 text-white/70 hover:text-white transition-colors">
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
                    </button>
                    
                    <GlassButton variant="solid" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Order
                    </GlassButton>
                  </div>
                </div>
              </div>
            </motion.header>

            {/* Page Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6"
            >
              <Outlet />
            </motion.main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

