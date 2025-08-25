import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Type, 
  Clock, 
  BarChart3, 
  Palette 
} from 'lucide-react';
import { GlassCard } from '@/components/glass';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Platform-native pacing',
      description: 'Optimized timing and rhythm for each social platform\'s algorithm and user behavior.',
    },
    {
      icon: Zap,
      title: 'Stop-scroll hooks',
      description: 'Attention-grabbing opening seconds designed to make viewers pause their scroll.',
    },
    {
      icon: Type,
      title: 'Bold captions & CTAs',
      description: 'Eye-catching text overlays and compelling calls-to-action that drive conversions.',
    },
    {
      icon: Clock,
      title: 'Fast turnaround',
      description: 'Get your finished ad in days, not weeks. Rush delivery available for urgent campaigns.',
    },
    {
      icon: BarChart3,
      title: 'A/B hook variants',
      description: 'Multiple opening variations to test and find the highest-performing version.',
    },
    {
      icon: Palette,
      title: 'UGC-style options',
      description: 'Authentic, user-generated content styling that feels native and trustworthy.',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built to Convert
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Every element is crafted with conversion in mind, from the first frame to the final CTA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 space-y-4 h-full group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <GlassCard className="inline-block px-8 py-4">
            <p className="text-white/80 text-lg">
              <span className="text-primary font-semibold">One flat price.</span> Pro results. No retainers.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

