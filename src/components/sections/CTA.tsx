import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GlassButton, GlassCard } from '@/components/glass';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12 text-center space-y-8 shimmer">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Ready to Convert?</span>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Get Your First Ad for{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  $97
                </span>
              </h2>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Join 500+ brands who've boosted their conversion rates with our scroll-stopping video ads. 
                No contracts, no hidden fees—just results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GlassButton variant="solid" size="lg" className="group">
                Start Your Ad for $97
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
              <GlassButton variant="ghost" size="lg">
                See More Examples
              </GlassButton>
            </div>

            <div className="flex items-center justify-center space-x-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>48hr delivery available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

