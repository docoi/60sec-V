import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Download, Calendar, DollarSign } from 'lucide-react';
import { GlassCard, GlassButton } from '@/components/glass';

export const Billing: React.FC = () => {
  const invoices = [
    {
      id: 'INV-001',
      date: '2024-01-15',
      amount: 194,
      status: 'Paid',
      description: 'Fitness App Campaign + Rush Delivery',
    },
    {
      id: 'INV-002',
      date: '2024-01-10',
      amount: 144,
      status: 'Paid',
      description: 'E-commerce Demo + Extra Hooks',
    },
    {
      id: 'INV-003',
      date: '2024-01-05',
      amount: 97,
      status: 'Paid',
      description: 'SaaS Explainer Video',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'text-green-400 bg-green-400/20';
      case 'Pending':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Overdue':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-white/60 bg-white/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Billing</h1>
        <p className="text-white/70">Manage your payments and invoices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <GlassCard className="p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Method
            </h2>
            
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="text-white font-medium">•••• •••• •••• 4242</p>
                  <p className="text-white/60 text-sm">Expires 12/25</p>
                </div>
              </div>
              <GlassButton variant="ghost" size="sm">
                Update
              </GlassButton>
            </div>
          </GlassCard>

          {/* Invoices */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Invoices</h2>
            
            <div className="space-y-4">
              {invoices.map((invoice, index) => (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{invoice.description}</p>
                      <div className="flex items-center space-x-3 text-sm text-white/60">
                        <span>{invoice.id}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {invoice.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-white font-semibold">${invoice.amount}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </div>
                    <GlassButton variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </GlassButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Billing Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">This Month</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Total Spent</span>
                <span className="text-white font-semibold">$435</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Orders</span>
                <span className="text-white font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Avg. Order</span>
                <span className="text-white font-semibold">$145</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">All Time</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/70">Total Spent</span>
                <span className="text-white font-semibold">$1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Total Orders</span>
                <span className="text-white font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Member Since</span>
                <span className="text-white font-semibold">Dec 2023</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Need Help?</h3>
            <p className="text-white/70 text-sm mb-4">
              Questions about billing or need a custom invoice?
            </p>
            <GlassButton variant="ghost" size="sm" className="w-full">
              Contact Support
            </GlassButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Billing;

