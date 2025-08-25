import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Clock, Palette, FileText, Zap, Settings } from 'lucide-react';
import { Layout } from '@/components/layout';
import { GlassCard, GlassButton } from '@/components/glass';

export const Pricing: React.FC = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = [
    {
      id: 'rush',
      title: 'Rush Delivery (24-48hrs)',
      price: 97,
      icon: Clock,
      description: 'Get your ad delivered in 1-2 business days instead of 3-5 days.',
    },
    {
      id: 'extra-hooks',
      title: 'Extra Hook Variations',
      price: 47,
      icon: Zap,
      description: 'Get 5-7 hook variations instead of the standard 2-3 for better A/B testing.',
    },
    {
      id: 'subtitles',
      title: 'Subtitles & SRT Files',
      price: 27,
      icon: FileText,
      description: 'Professional subtitles burned-in plus separate SRT files for accessibility.',
    },
    {
      id: 'aspect-ratios',
      title: 'Multiple Aspect Ratios',
      price: 37,
      icon: Settings,
      description: 'Get your ad in 16:9, 9:16, 4:5, and 1:1 formats for all platforms.',
    },
    {
      id: 'brand-kit',
      title: 'Brand Kit Setup',
      price: 67,
      icon: Palette,
      description: 'We create and save your brand guidelines for consistent future ads.',
    },
  ];

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    const basePrice = 97;
    const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    return basePrice + addOnTotal;
  };

  const features = [
    'Platform-optimized video ad (≤60 seconds)',
    '2-3 hook variations for A/B testing',
    'Professional editing and pacing',
    'Platform-specific captions and CTAs',
    'Royalty-free music and sound effects',
    'One round of revisions included',
    'Commercial usage rights',
    '3-5 day standard delivery',
    'Multiple format exports',
    'Performance optimization tips',
  ];

  const comparison = [
    { feature: 'Professional video ad', us: true, diy: false, agency: true },
    { feature: 'Platform optimization', us: true, diy: false, agency: true },
    { feature: 'A/B hook variations', us: true, diy: false, agency: false },
    { feature: 'Fast turnaround', us: true, diy: true, agency: false },
    { feature: 'Affordable pricing', us: true, diy: true, agency: false },
    { feature: 'Revisions included', us: true, diy: false, agency: true },
    { feature: 'No monthly retainer', us: true, diy: true, agency: false },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - 60sec Ads</title>
        <meta name="description" content="Simple, transparent pricing. $97 per video ad with optional add-ons. No contracts, no hidden fees." />
      </Helmet>
      
      <Layout>
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                One flat rate. Professional results. No contracts or hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <GlassCard className="p-8 space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-white">
                      60sec Ad Creation
                    </h2>
                    <div className="space-y-2">
                      <div className="text-6xl font-bold text-white">
                        $<span className="text-primary">97</span>
                      </div>
                      <p className="text-white/70">per video ad (≤60 seconds)</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <GlassButton variant="solid" size="lg" className="w-full md:w-auto">
                      Start Your Ad for $97
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Add-ons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Add-ons</h3>
                  <div className="space-y-4">
                    {addOns.map((addOn) => {
                      const Icon = addOn.icon;
                      const isSelected = selectedAddOns.includes(addOn.id);
                      
                      return (
                        <div
                          key={addOn.id}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            isSelected 
                              ? 'border-primary bg-primary/10' 
                              : 'border-white/20 hover:border-white/40'
                          }`}
                          onClick={() => toggleAddOn(addOn.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="text-white font-medium text-sm">
                                  {addOn.title}
                                </h4>
                                <span className="text-primary font-semibold">
                                  +${addOn.price}
                                </span>
                              </div>
                              <p className="text-white/60 text-xs">
                                {addOn.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>

                {/* Total */}
                <GlassCard className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-semibold text-white">Total</h3>
                    <div className="text-3xl font-bold text-primary">
                      ${calculateTotal()}
                    </div>
                    <GlassButton variant="solid" className="w-full">
                      Get Started
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                How We Compare
              </h2>
              
              <GlassCard className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-white font-semibold">Feature</th>
                        <th className="text-center p-4 text-primary font-semibold">60sec Ads</th>
                        <th className="text-center p-4 text-white/70 font-semibold">DIY</th>
                        <th className="text-center p-4 text-white/70 font-semibold">Agency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, index) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="p-4 text-white/80">{row.feature}</td>
                          <td className="p-4 text-center">
                            {row.us ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-white/30">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {row.diy ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-white/30">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {row.agency ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <span className="text-white/30">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pricing;

