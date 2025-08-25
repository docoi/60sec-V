import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { Layout } from '@/components/layout';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';
import { useAuthStore } from '@/store/authStore';

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const { signUp, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setError(null);
      await signUp(data.name, data.email, data.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - 60sec Ads</title>
        <meta name="description" content="Create your 60sec Ads account to start ordering high-converting video ads." />
      </Helmet>
      
      <Layout showNavbar={false} showFooter={false}>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full"
          >
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">60</span>
                </div>
                <span className="text-white font-bold text-2xl">60sec Ads</span>
              </Link>
              <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
              <p className="text-white/70">Start creating high-converting ads today</p>
            </div>

            <GlassCard className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="relative">
                    <GlassInput
                      type="text"
                      placeholder="Enter your full name"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <User className="absolute right-3 top-3 h-5 w-5 text-white/40" />
                  </div>

                  <div className="relative">
                    <GlassInput
                      type="email"
                      placeholder="Enter your email"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-white/40" />
                  </div>

                  <div className="relative">
                    <GlassInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      error={errors.password?.message}
                      {...register('password')}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-white/40 hover:text-white/60"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="relative">
                    <GlassInput
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      error={errors.confirmPassword?.message}
                      {...register('confirmPassword')}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-white/40 hover:text-white/60"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary mt-1"
                      {...register('acceptTerms')}
                    />
                    <span className="text-sm text-white/70 leading-relaxed">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:text-primary/80">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:text-primary/80">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-400">{errors.acceptTerms.message}</p>
                  )}
                </div>

                <GlassButton
                  type="submit"
                  variant="solid"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </GlassButton>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-white/60">Or continue with</span>
                  </div>
                </div>

                <GlassButton variant="ghost" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Magic Link
                </GlassButton>
              </form>

              <div className="mt-6 text-center">
                <p className="text-white/70">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-primary hover:text-primary/80 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;

