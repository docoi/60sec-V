import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Shield, Trash2, Save } from 'lucide-react';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';
import { useAuthStore } from '@/store/authStore';

export const Account: React.FC = () => {
  const { user, updateUser } = useAuthStore();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
        <p className="text-white/70">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Profile Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full" />
                  ) : (
                    <span className="text-white font-bold text-2xl">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
                <div>
                  <GlassButton variant="ghost" size="sm">
                    Change Avatar
                  </GlassButton>
                  <p className="text-white/60 text-sm mt-1">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="space-y-4">
                <GlassInput
                  label="Full Name"
                  defaultValue={user?.name || ''}
                  placeholder="Enter your full name"
                />
                
                <GlassInput
                  label="Email Address"
                  type="email"
                  defaultValue={user?.email || ''}
                  placeholder="Enter your email"
                />
                
                <GlassInput
                  label="Company (Optional)"
                  placeholder="Enter your company name"
                />
                
                <GlassInput
                  label="Website (Optional)"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <GlassButton variant="solid">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </GlassButton>
            </div>
          </GlassCard>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Password */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Password
            </h2>
            
            <div className="space-y-4">
              <GlassInput
                label="Current Password"
                type="password"
                placeholder="Enter current password"
              />
              
              <GlassInput
                label="New Password"
                type="password"
                placeholder="Enter new password"
              />
              
              <GlassInput
                label="Confirm New Password"
                type="password"
                placeholder="Confirm new password"
              />

              <GlassButton variant="solid" size="sm">
                Update Password
              </GlassButton>
            </div>
          </GlassCard>

          {/* Two-Factor Authentication */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Two-Factor Authentication
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-medium">SMS Authentication</p>
                  <p className="text-white/60 text-sm">Receive codes via SMS</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-medium">Authenticator App</p>
                  <p className="text-white/60 text-sm">Use Google Authenticator or similar</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Danger Zone */}
          <GlassCard className="p-6 border border-red-500/30">
            <h2 className="text-xl font-bold text-red-400 mb-6 flex items-center">
              <Trash2 className="w-5 h-5 mr-2" />
              Danger Zone
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <h3 className="text-white font-medium mb-2">Delete Account</h3>
                <p className="text-white/70 text-sm mb-4">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <GlassButton
                  variant="ghost"
                  size="sm"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/20"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Account
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-6 max-w-md mx-4">
              <h3 className="text-xl font-bold text-white mb-4">Delete Account</h3>
              <p className="text-white/70 mb-6">
                Are you sure you want to delete your account? This will permanently remove all your data, orders, and cannot be undone.
              </p>
              <div className="flex space-x-4">
                <GlassButton
                  variant="ghost"
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1"
                >
                  Cancel
                </GlassButton>
                <GlassButton
                  variant="solid"
                  className="flex-1 bg-red-500 hover:bg-red-600"
                >
                  Delete Account
                </GlassButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Account;

