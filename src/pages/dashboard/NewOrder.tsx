import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  Check, 
  Sparkles,
  Target,
  Users,
  Palette,
  Video,
  CreditCard
} from 'lucide-react';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';

const orderSchema = z.object({
  // Step 1: Project Basics
  projectName: z.string().min(2, 'Project name is required'),
  productUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  
  // Step 2: Platforms & Goals
  platforms: z.array(z.string()).min(1, 'Select at least one platform'),
  goal: z.string().min(1, 'Please select a goal'),
  
  // Step 3: Audience & Messaging
  targetAudience: z.string().min(10, 'Please describe your target audience'),
  keyBenefits: z.string().min(10, 'Please describe key benefits'),
  tone: z.string().min(1, 'Please select a tone'),
  
  // Step 4: Creative Direction
  hooks: z.array(z.string()).min(1, 'At least one hook is required'),
  aspectRatios: z.array(z.string()).min(1, 'Select at least one aspect ratio'),
  
  // Step 5: Add-ons
  addOns: z.array(z.string()).optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

export const NewOrder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 6;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      platforms: [],
      hooks: [],
      aspectRatios: [],
      addOns: [],
    },
  });

  const watchedValues = watch();

  const platforms = [
    { id: 'tiktok', name: 'TikTok', color: 'from-pink-500 to-red-500' },
    { id: 'instagram', name: 'Instagram', color: 'from-purple-500 to-pink-500' },
    { id: 'youtube', name: 'YouTube', color: 'from-red-500 to-red-600' },
    { id: 'facebook', name: 'Facebook', color: 'from-blue-500 to-blue-600' },
  ];

  const goals = [
    { id: 'sales', name: 'Drive Sales', icon: Target },
    { id: 'leads', name: 'Generate Leads', icon: Users },
    { id: 'awareness', name: 'Brand Awareness', icon: Sparkles },
    { id: 'engagement', name: 'Engagement', icon: Video },
  ];

  const tones = [
    'Professional', 'Casual', 'Energetic', 'Humorous', 'Inspiring', 'Educational'
  ];

  const aspectRatios = [
    { id: '9:16', name: '9:16 (Vertical)', desc: 'TikTok, IG Stories' },
    { id: '1:1', name: '1:1 (Square)', desc: 'IG Feed, Facebook' },
    { id: '16:9', name: '16:9 (Horizontal)', desc: 'YouTube, LinkedIn' },
    { id: '4:5', name: '4:5 (Portrait)', desc: 'IG Feed, Facebook' },
  ];

  const addOns = [
    { id: 'rush', name: 'Rush Delivery (24-48hrs)', price: 97 },
    { id: 'extra-hooks', name: 'Extra Hook Variations', price: 47 },
    { id: 'subtitles', name: 'Subtitles & SRT Files', price: 27 },
    { id: 'multiple-ratios', name: 'Multiple Aspect Ratios', price: 37 },
  ];

  const toggleArrayValue = (array: string[], value: string, fieldName: keyof OrderFormData) => {
    const currentArray = array || [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    setValue(fieldName, newArray);
  };

  const generateHooks = () => {
    const sampleHooks = [
      "Stop scrolling if you want to...",
      "This changed everything for me...",
      "Nobody talks about this but...",
    ];
    setValue('hooks', sampleHooks);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    try {
      console.log('Order data:', data);
      // Here you would submit to your backend/Supabase
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(totalSteps);
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateTotal = () => {
    const basePrice = 97;
    const addOnTotal = (watchedValues.addOns || []).reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    return basePrice + addOnTotal;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Project Basics</h2>
              <p className="text-white/70">Let's start with the fundamentals</p>
            </div>
            
            <div className="space-y-6">
              <GlassInput
                label="Project Name *"
                placeholder="e.g., Fitness App Launch Campaign"
                error={errors.projectName?.message}
                {...register('projectName')}
              />
              
              <GlassInput
                label="Product/Service URL"
                placeholder="https://yourproduct.com"
                error={errors.productUrl?.message}
                {...register('productUrl')}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Platforms & Goals</h2>
              <p className="text-white/70">Where will you run this ad and what's the goal?</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Target Platforms *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => toggleArrayValue(watchedValues.platforms || [], platform.id, 'platforms')}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        (watchedValues.platforms || []).includes(platform.id)
                          ? 'border-primary bg-primary/20'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${platform.color} mx-auto mb-2`} />
                      <span className="text-white font-medium">{platform.name}</span>
                    </button>
                  ))}
                </div>
                {errors.platforms && (
                  <p className="text-sm text-red-400 mt-2">{errors.platforms.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Primary Goal *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {goals.map((goal) => {
                    const Icon = goal.icon;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setValue('goal', goal.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                          watchedValues.goal === goal.id
                            ? 'border-primary bg-primary/20'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="text-white font-medium text-sm">{goal.name}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.goal && (
                  <p className="text-sm text-red-400 mt-2">{errors.goal.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Audience & Messaging</h2>
              <p className="text-white/70">Help us understand your audience and key messages</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Target Audience *
                </label>
                <textarea
                  className="glass-input w-full h-24 resize-none"
                  placeholder="e.g., Fitness enthusiasts aged 25-40 who struggle with consistency..."
                  {...register('targetAudience')}
                />
                {errors.targetAudience && (
                  <p className="text-sm text-red-400">{errors.targetAudience.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">
                  Key Benefits *
                </label>
                <textarea
                  className="glass-input w-full h-24 resize-none"
                  placeholder="e.g., Get fit in just 15 minutes a day, no gym required..."
                  {...register('keyBenefits')}
                />
                {errors.keyBenefits && (
                  <p className="text-sm text-red-400">{errors.keyBenefits.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Tone & Style *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setValue('tone', tone)}
                      className={`p-3 rounded-xl border transition-all duration-200 ${
                        watchedValues.tone === tone
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-white/20 hover:border-white/40 text-white/70'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
                {errors.tone && (
                  <p className="text-sm text-red-400 mt-2">{errors.tone.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Creative Direction</h2>
              <p className="text-white/70">Let's craft the perfect hooks and format</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-white/80">
                    Hook Ideas *
                  </label>
                  <GlassButton
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={generateHooks}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Generate
                  </GlassButton>
                </div>
                <div className="space-y-3">
                  {(watchedValues.hooks || []).map((hook, index) => (
                    <GlassInput
                      key={index}
                      placeholder={`Hook ${index + 1}`}
                      value={hook}
                      onChange={(e) => {
                        const newHooks = [...(watchedValues.hooks || [])];
                        newHooks[index] = e.target.value;
                        setValue('hooks', newHooks);
                      }}
                    />
                  ))}
                  <GlassButton
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setValue('hooks', [...(watchedValues.hooks || []), ''])}
                  >
                    + Add Hook
                  </GlassButton>
                </div>
                {errors.hooks && (
                  <p className="text-sm text-red-400">{errors.hooks.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Aspect Ratios *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio.id}
                      type="button"
                      onClick={() => toggleArrayValue(watchedValues.aspectRatios || [], ratio.id, 'aspectRatios')}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        (watchedValues.aspectRatios || []).includes(ratio.id)
                          ? 'border-primary bg-primary/20'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className="font-medium text-white">{ratio.name}</div>
                      <div className="text-sm text-white/60">{ratio.desc}</div>
                    </button>
                  ))}
                </div>
                {errors.aspectRatios && (
                  <p className="text-sm text-red-400 mt-2">{errors.aspectRatios.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Add-ons & Assets</h2>
              <p className="text-white/70">Enhance your order with premium options</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Add-ons (Optional)
                </label>
                <div className="space-y-3">
                  {addOns.map((addOn) => (
                    <button
                      key={addOn.id}
                      type="button"
                      onClick={() => toggleArrayValue(watchedValues.addOns || [], addOn.id, 'addOns')}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        (watchedValues.addOns || []).includes(addOn.id)
                          ? 'border-primary bg-primary/20'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{addOn.name}</span>
                        <span className="text-primary font-semibold">+${addOn.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Upload Assets (Optional)
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/40 transition-colors">
                  <Upload className="w-8 h-8 text-white/40 mx-auto mb-4" />
                  <p className="text-white/70 mb-2">Drop your files here or click to browse</p>
                  <p className="text-white/50 text-sm">Logo, product images, existing footage, brand guidelines</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Order Submitted!</h2>
              <p className="text-white/70 text-lg">
                We've received your order and will start working on it right away.
              </p>
            </div>
            <GlassCard className="p-6 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Order ID:</span>
                  <span className="text-white font-mono">ORD-{Date.now().toString().slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total:</span>
                  <span className="text-white font-bold">${calculateTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Delivery:</span>
                  <span className="text-white">3-5 business days</span>
                </div>
              </div>
            </GlassCard>
            <GlassButton variant="solid" size="lg">
              <CreditCard className="w-5 h-5 mr-2" />
              Complete Payment
            </GlassButton>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === totalSteps) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard className="max-w-2xl mx-auto p-8">
          {renderStep()}
        </GlassCard>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">Create New Ad</h1>
          <span className="text-white/60">Step {currentStep} of {totalSteps - 1}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard className="p-8 mb-8">
            {renderStep()}
          </GlassCard>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <GlassButton
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </GlassButton>

          <div className="flex items-center space-x-4">
            <div className="text-white/60">
              Total: <span className="text-primary font-bold">${calculateTotal()}</span>
            </div>
            
            {currentStep === totalSteps - 1 ? (
              <GlassButton
                type="submit"
                variant="solid"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            ) : (
              <GlassButton
                type="button"
                variant="solid"
                onClick={nextStep}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </GlassButton>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewOrder;

