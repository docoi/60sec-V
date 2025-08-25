import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Scissors, Rocket } from 'lucide-react';
import { GlassCard } from '@/components/glass';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Brief us in 2 minutes',
      description: 'Tell us about your product, audience, and goals. Upload your assets and let us know your vision.',
      step: '01',
    },
    {
      icon: Scissors,
      title: 'We craft hooks & edits',
      description: 'Our team creates scroll-stopping hooks, native-feeling edits, and platform-specific optimizations.',
      step: '02',
    },
    {
      icon: Rocket,
      title: 'You launch in days',
      description: 'Get your finished ad with A/B hook variants, captions, and everything ready to post and convert.',
      step: '03',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We script, cut, caption and format your ad for each platform so you can launch faster and convert more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center space-y-6 h-full">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <div className="relative">
            <div className="absolute top-0 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

