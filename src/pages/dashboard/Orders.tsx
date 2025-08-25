import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MessageSquare, 
  Calendar,
  Play,
  MoreHorizontal
} from 'lucide-react';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';

export const Orders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      title: 'Fitness App Launch Campaign',
      platform: 'TikTok',
      status: 'In Production',
      progress: 75,
      createdDate: '2024-01-10',
      dueDate: '2024-01-15',
      price: 97,
      thumbnail: '/assets/orders/fitness-app.jpg',
      notes: 'Working on hook variations',
    },
    {
      id: 'ORD-002',
      title: 'E-commerce Product Demo',
      platform: 'Instagram',
      status: 'Delivered',
      progress: 100,
      createdDate: '2024-01-05',
      dueDate: '2024-01-10',
      price: 144,
      thumbnail: '/assets/orders/ecommerce-demo.jpg',
      deliverables: ['main-video.mp4', 'hooks-a.mp4', 'hooks-b.mp4'],
    },
    {
      id: 'ORD-003',
      title: 'SaaS Explainer Video',
      platform: 'YouTube',
      status: 'In Review',
      progress: 90,
      createdDate: '2024-01-12',
      dueDate: '2024-01-18',
      price: 97,
      thumbnail: '/assets/orders/saas-explainer.jpg',
      notes: 'Awaiting client feedback',
    },
    {
      id: 'ORD-004',
      title: 'Beauty Brand Campaign',
      platform: 'TikTok',
      status: 'Draft',
      progress: 25,
      createdDate: '2024-01-14',
      dueDate: '2024-01-20',
      price: 194,
      thumbnail: '/assets/orders/beauty-brand.jpg',
      notes: 'Gathering assets',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'In Production':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'In Review':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Draft':
        return 'text-white/60 bg-white/10 border-white/20';
      default:
        return 'text-white/60 bg-white/10 border-white/20';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase().replace(' ', '-') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Orders</h1>
          <p className="text-white/70">Manage and track your video ad orders</p>
        </div>
        <GlassButton variant="solid">
          + New Order
        </GlassButton>
      </div>

      {/* Filters */}
      <GlassCard className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            {['all', 'draft', 'in-production', 'in-review', 'delivered'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  statusFilter === status
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center space-x-6">
                {/* Thumbnail */}
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="w-8 h-8 text-white/60" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {order.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <span>{order.platform}</span>
                        <span>•</span>
                        <span>{order.id}</span>
                        <span>•</span>
                        <span>${order.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <button className="p-2 text-white/60 hover:text-white transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white/60">Progress</span>
                      <span className="text-sm text-white/60">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${order.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Dates and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Due {order.dueDate}</span>
                      </div>
                      {order.notes && (
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{order.notes}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      {order.status === 'Delivered' && order.deliverables && (
                        <GlassButton variant="ghost" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </GlassButton>
                      )}
                      <GlassButton variant="ghost" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </GlassButton>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <GlassCard className="p-12 text-center">
          <div className="text-white/60 mb-4">
            <FileText className="w-12 h-12 mx-auto mb-4" />
            <p className="text-lg">No orders found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        </GlassCard>
      )}
    </div>
  );
};

export default Orders;

