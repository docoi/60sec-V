import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Type, Image, Save } from 'lucide-react';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';

export const BrandKit: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Brand Kit</h1>
        <p className="text-white/70">Set up your brand guidelines for consistent ads</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Brand Assets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Image className="w-5 h-5 mr-2" />
              Brand Assets
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">Logo</label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-white/40 transition-colors">
                  <Upload className="w-8 h-8 text-white/40 mx-auto mb-3" />
                  <p className="text-white/70 mb-1">Upload your logo</p>
                  <p className="text-white/50 text-sm">PNG, SVG recommended</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">Product Images</label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-white/40 transition-colors">
                  <Upload className="w-8 h-8 text-white/40 mx-auto mb-3" />
                  <p className="text-white/70 mb-1">Upload product images</p>
                  <p className="text-white/50 text-sm">High-res images work best</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">Brand Guidelines</label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-white/40 transition-colors">
                  <Upload className="w-8 h-8 text-white/40 mx-auto mb-3" />
                  <p className="text-white/70 mb-1">Upload brand guidelines</p>
                  <p className="text-white/50 text-sm">PDF, DOC files accepted</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Brand Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Colors */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Brand Colors
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Primary Color</label>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-xl border border-white/20"></div>
                  <GlassInput placeholder="#5AA6FF" className="flex-1" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Secondary Color</label>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-xl border border-white/20"></div>
                  <GlassInput placeholder="#8B5CF6" className="flex-1" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Accent Color</label>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl border border-white/20"></div>
                  <GlassInput placeholder="#10B981" className="flex-1" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Typography */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Type className="w-5 h-5 mr-2" />
              Typography
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Primary Font</label>
                <select className="glass-input w-full">
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="montserrat">Montserrat</option>
                  <option value="poppins">Poppins</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Secondary Font</label>
                <select className="glass-input w-full">
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="montserrat">Montserrat</option>
                  <option value="poppins">Poppins</option>
                </select>
              </div>
            </div>
          </GlassCard>

          {/* Brand Voice */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Brand Voice</h2>
            
            <div className="space-y-4">
              <GlassInput
                label="Brand Personality"
                placeholder="e.g., Professional, Friendly, Innovative"
              />
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Key Messages
                </label>
                <textarea
                  className="glass-input w-full h-24 resize-none"
                  placeholder="What are your core brand messages and values?"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Tone Guidelines
                </label>
                <textarea
                  className="glass-input w-full h-24 resize-none"
                  placeholder="How should your brand sound in communications?"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <GlassButton variant="solid" size="lg">
          <Save className="w-5 h-5 mr-2" />
          Save Brand Kit
        </GlassButton>
      </div>
    </div>
  );
};

export default BrandKit;