import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GlassCard } from '@/components/glass';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What\'s the typical turnaround time?',
      answer: 'Most ads are delivered within 3-5 business days. Rush delivery (24-48 hours) is available for an additional fee. We\'ll give you an exact timeline when you submit your brief.',
    },
    {
      question: 'How many revisions are included?',
      answer: 'One round of revisions is included with every ad. This covers adjustments to timing, text overlays, music, or other creative elements. Additional revision rounds are available for $47 each.',
    },
    {
      question: 'What do I own after the ad is delivered?',
      answer: 'You own full commercial usage rights to your finished ad. Use it across any platform, run it as long as you want, and modify it as needed. We retain portfolio rights to showcase our work.',
    },
    {
      question: 'What assets do you need from me?',
      answer: 'At minimum, we need your product/service details and target audience info. Ideally, provide your logo, product photos/videos, brand colors, and any existing footage. We can work with stock assets if needed.',
    },
    {
      question: 'Which platforms do you optimize for?',
      answer: 'We create platform-specific versions for TikTok, Instagram (Feed & Stories), YouTube (Shorts & regular), Facebook, Twitter, LinkedIn, and Pinterest. Each version is optimized for that platform\'s specs and audience behavior.',
    },
    {
      question: 'What if I\'m not satisfied with the result?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy after the included revision round, we\'ll refund your payment in full. Our goal is to create ads that you love and that drive results.',
    },
    {
      question: 'Can you handle ongoing ad creation?',
      answer: 'Absolutely! Many clients work with us monthly for fresh creative. We offer volume discounts for 3+ ads per month and can set up a recurring arrangement that fits your content calendar.',
    },
    {
      question: 'Do you provide A/B testing variations?',
      answer: 'Yes! Every ad includes 2-3 hook variations for A/B testing. This lets you test different opening lines, visuals, or approaches to find what resonates best with your audience.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80">
            Everything you need to know about our ad creation process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-white font-medium text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-white/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

