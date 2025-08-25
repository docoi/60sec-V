import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Eye } from 'lucide-react';
import { GlassCard } from '@/components/glass';

export const Showcase: React.FC = () => {
  const showcaseItems = [
    {
      id: 1,
      platform: 'TikTok',
      thumbnail: '/assets/showcase/tiktok-ad-1.jpg',
      kpi: '+340% CTR',
      title: 'Fitness App Launch',
      views: '2.1M',
      platformColor: 'from-pink-500 to-red-500',
    },
    {
      id: 2,
      platform: 'Instagram',
      thumbnail: '/assets/showcase/instagram-ad-1.jpg',
      kpi: '+180% ROAS',
      title: 'E-commerce Store',
      views: '890K',
      platformColor: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      platform: 'YouTube',
      thumbnail: '/assets/showcase/youtube-ad-1.jpg',
      kpi: '+250% Conv',
      title: 'SaaS Product Demo',
      views: '1.5M',
      platformColor: 'from-red-500 to-red-600',
    },
    {
      id: 4,
      platform: 'Facebook',
      thumbnail: '/assets/showcase/facebook-ad-1.jpg',
      kpi: '+195% Leads',
      title: 'Local Business',
      views: '650K',
      platformColor: 'from-blue-500 to-blue-600',
    },
    {
      id: 5,
      platform: 'TikTok',
      thumbnail: '/assets/showcase/tiktok-ad-2.jpg',
      kpi: '+420% Eng',
      title: 'Beauty Brand',
      views: '3.2M',
      platformColor: 'from-pink-500 to-red-500',
    },
    {
      id: 6,
      platform: 'Instagram',
      thumbnail: '/assets/showcase/instagram-ad-2.jpg',
      kpi: '+290% Sales',
      title: 'Fashion Retailer',
      views: '1.1M',
      platformColor: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="showcase" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Proven Results
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real ads, real results. See how we've helped brands across every platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group cursor-pointer overflow-hidden">
                {/* Thumbnail */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {/* Placeholder for thumbnail */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div className="text-white/60 text-sm">
                        {item.platform} Ad Preview
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${item.platformColor}`}>
                    {item.platform}
                  </div>
                  
                  {/* KPI Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-xl border border-green-500/30">
                    <span className="text-green-400 text-xs font-semibold">
                      {item.kpi}
                    </span>
                  </div>
                  
                  {/* Views */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-xl">
                    <Eye className="w-3 h-3 text-white/80" />
                    <span className="text-white/80 text-xs">{item.views}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm">
                    {item.title}
                  </h3>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '500+', label: 'Ads Delivered' },
            { number: '2.3x', label: 'Average CVR Boost' },
            { number: '48hrs', label: 'Average Turnaround' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <GlassCard className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">
                  {stat.label}
                </div>
              </GlassCard>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;

