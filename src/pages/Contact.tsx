import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: 'under-500', label: 'Under $500/month' },
    { value: '500-1000', label: '$500 - $1,000/month' },
    { value: '1000-2500', label: '$1,000 - $2,500/month' },
    { value: '2500-5000', label: '$2,500 - $5,000/month' },
    { value: 'over-5000', label: 'Over $5,000/month' },
  ];

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend/Supabase
      console.log('Contact form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch for questions or custom projects',
      contact: 'hello@60secads.com',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team during business hours',
      contact: 'Available 9 AM - 6 PM EST',
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'We typically respond within',
      contact: '2-4 hours',
    },
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Thank You - 60sec Ads</title>
        </Helmet>
        
        <Layout>
          <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h1 className="text-3xl font-bold text-white">Thank You!</h1>
                  <p className="text-white/80 leading-relaxed">
                    We've received your message and will get back to you within 2-4 hours. 
                    In the meantime, feel free to check out our examples or start your first ad.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <GlassButton variant="solid" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </GlassButton>
                    <GlassButton variant="ghost">
                      Start Your Ad for $97
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact - 60sec Ads</title>
        <meta name="description" content="Get in touch with our team. We're here to help you create high-converting video ads." />
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
                Let's Create Something{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Amazing
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to boost your conversions? Have questions? We're here to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <GlassCard key={info.title} className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {info.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-2">
                          {info.description}
                        </p>
                        <p className="text-primary font-medium">
                          {info.contact}
                        </p>
                      </div>
                    </GlassCard>
                  );
                })}
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <GlassInput
                        label="Name *"
                        placeholder="Your name"
                        error={errors.name?.message}
                        {...register('name')}
                      />
                      <GlassInput
                        label="Email *"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <GlassInput
                        label="Website/Brand URL"
                        placeholder="https://yourbrand.com"
                        error={errors.website?.message}
                        {...register('website')}
                      />
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white/80">
                          Budget Range *
                        </label>
                        <select
                          className="glass-input w-full"
                          {...register('budget')}
                        >
                          {budgetOptions.map((option) => (
                            <option 
                              key={option.value} 
                              value={option.value}
                              className="bg-gray-800 text-white"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="text-sm text-red-400">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white/80">
                        Message *
                      </label>
                      <textarea
                        className="glass-input w-full h-32 resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    <GlassButton
                      type="submit"
                      variant="solid"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </GlassButton>
                  </form>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;

