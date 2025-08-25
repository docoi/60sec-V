import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Award } from 'lucide-react';
import { Layout } from '@/components/layout';
import { GlassCard } from '@/components/glass';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Conversion-First',
      description: 'Every creative decision is made with one goal: turning viewers into customers.',
    },
    {
      icon: Zap,
      title: 'Speed & Quality',
      description: 'Fast turnaround without compromising on professional standards.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, not just another vendor.',
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'Success is measured by your ROI, not just pretty videos.',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Founded',
      description: 'Started with a mission to democratize high-converting video ads for all businesses.',
    },
    {
      year: '2023',
      title: '100 Ads',
      description: 'Delivered our first 100 ads with an average 2.1x conversion rate improvement.',
    },
    {
      year: '2024',
      title: '500+ Ads',
      description: 'Scaled to serve 200+ brands across all major social platforms.',
    },
    {
      year: '2024',
      title: 'Platform Leader',
      description: 'Became the go-to solution for performance-focused video ad creation.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - 60sec Ads</title>
        <meta name="description" content="Learn about our mission to help brands create high-converting video ads that turn scrollers into buyers." />
      </Helmet>
      
      <Layout>
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                We Turn Scrollers into{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Buyers
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Born from the frustration of seeing great products fail because of poor video ads, 
                60sec Ads exists to level the playing field. Every brand deserves ads that convert.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <GlassCard className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
                  To democratize high-converting video advertising by making professional, 
                  platform-optimized ads accessible to every business—regardless of budget or team size. 
                  We believe that with the right creative approach, any product can find its audience 
                  and drive meaningful results.
                </p>
              </GlassCard>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <GlassCard key={value.title} className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>

            {/* Founder Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <GlassCard className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-6">A Note from Our Founder</h2>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      "I started 60sec Ads after watching too many great products fail in the market—not because 
                      they weren't valuable, but because their video ads weren't converting. The gap between 
                      having a great product and communicating its value effectively was costing businesses millions."
                    </p>
                    <p>
                      "Traditional agencies were too expensive and slow. DIY tools produced amateur results. 
                      There had to be a better way—a service that combined professional quality with speed and 
                      affordability. That's exactly what we built."
                    </p>
                    <p>
                      "Today, we've helped 500+ brands boost their conversion rates by an average of 2.3x. 
                      But we're just getting started. Our goal is to become the go-to solution for any business 
                      that wants to turn their social media traffic into paying customers."
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">JD</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">John Doe</div>
                        <div className="text-white/60 text-sm">Founder & CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <GlassCard key={item.year} className="p-6 space-y-4">
                    <div className="text-2xl font-bold text-primary">{item.year}</div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

