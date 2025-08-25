import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Layout } from '@/components/layout';
import { GlassCard, GlassButton, GlassInput } from '@/components/glass';
import { useAuthStore } from '@/store/authStore';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormData = z.infer<typeof signInSchema>;

export const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isLoading } = useAuthStore();
  
  const from = location.state?.from?.pathname || '/dashboard';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      setError(null);
      await signIn(data.email, data.password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In - 60sec Ads</title>
        <meta name="description" content="Sign in to your 60sec Ads account to manage your video ad orders." />
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
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
              <p className="text-white/70">Sign in to your account to continue</p>
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
                      placeholder="Enter your password"
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
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-white/20 bg-white/10 text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-sm text-white/70">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80"
                  >
                    Forgot password?
                  </Link>
                </div>

                <GlassButton
                  type="submit"
                  variant="solid"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
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
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                <p className="text-primary text-sm font-medium mb-2">Demo Credentials:</p>
                <p className="text-white/70 text-xs">
                  Email: demo@60secads.com<br />
                  Password: demo123
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default SignIn;

