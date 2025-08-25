import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  FileText,
  ArrowRight,
  Play,
  Calendar,
  Palette
} from 'lucide-react';
import { GlassCard, GlassButton } from '@/components/glass';
import { useAuthStore } from '@/store/authStore';

export const Overview: React.FC = () => {
  const { user } = useAuthStore();

  const stats = [
    {
      label: 'Total Orders',
      value: '12',
      change: '+3 this month',
      icon: FileText,
      color: 'text-primary',
    },
    {
      label: 'Completed Ads',
      value: '8',
      change: '+2 this week',
      icon: CheckCircle,
      color: 'text-green-400',
    },
    {
      label: 'In Progress',
      value: '3',
      change: 'On schedule',
      icon: Clock,
      color: 'text-yellow-400',
    },
    {
      label: 'Avg. Performance',
      value: '+2.3x',
      change: 'CVR boost',
      icon: TrendingUp,
      color: 'text-accent',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      title: 'Fitness App Launch Campaign',
      platform: 'TikTok',
      status: 'In Production',
      progress: 75,
      dueDate: '2024-01-15',
      thumbnail: '/assets/orders/fitness-app.jpg',
    },
    {
      id: 'ORD-002',
      title: 'E-commerce Product Demo',
      platform: 'Instagram',
      status: 'Delivered',
      progress: 100,
      dueDate: '2024-01-10',
      thumbnail: '/assets/orders/ecommerce-demo.jpg',
    },
    {
      id: 'ORD-003',
      title: 'SaaS Explainer Video',
      platform: 'YouTube',
      status: 'In Review',
      progress: 90,
      dueDate: '2024-01-18',
      thumbnail: '/assets/orders/saas-explainer.jpg',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-400 bg-green-400/20';
      case 'In Production':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'In Review':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-white/60 bg-white/10';
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
            </h1>
            <p className="text-white/70">
              Here's what's happening with your video ads today.
            </p>
          </div>
          <Link to="/dashboard/new-order">
            <GlassButton variant="solid" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Ad
            </GlassButton>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
                <p className="text-xs text-white/50">{stat.change}</p>
              </div>
            </GlassCard>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Recent Orders</h2>
              <Link to="/dashboard/orders">
                <GlassButton variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </GlassButton>
              </Link>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 text-white/60" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium truncate">
                        {order.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{order.platform} • {order.id}</span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {order.dueDate}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-2">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Quick Start */}
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Start</h2>
            <div className="space-y-3">
              <Link to="/dashboard/new-order">
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <Plus className="w-5 h-5 text-primary" />
                  <span className="text-white">Create New Ad</span>
                </button>
              </Link>
              <Link to="/dashboard/brand-kit">
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <Palette className="w-5 h-5 text-accent" />
                  <span className="text-white">Setup Brand Kit</span>
                </button>
              </Link>
              <Link to="/dashboard/orders">
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left">
                  <FileText className="w-5 h-5 text-green-400" />
                  <span className="text-white">View All Orders</span>
                </button>
              </Link>
            </div>
          </GlassCard>

          {/* Performance Tip */}
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">💡 Pro Tip</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Ads with A/B tested hooks perform 2.3x better on average. Always order multiple hook variations for optimal results.
            </p>
            <GlassButton variant="ghost" size="sm" className="w-full">
              Learn More
            </GlassButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;

