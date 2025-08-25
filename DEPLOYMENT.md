# Deployment Guide - 60sec Ads

This guide covers different deployment options for the 60sec Ads application.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
Vercel provides the best experience for React applications with automatic deployments.

1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-key
     VITE_GA_TRACKING_ID=G-XXXXXXXXXX
     ```
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed

### Option 2: Netlify
Great alternative with similar features to Vercel.

1. **Build the Application**
   ```bash
   pnpm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables**
   - Go to Site Settings > Environment Variables
   - Add your environment variables

4. **Configure Redirects**
   Create `public/_redirects` file:
   ```
   /*    /index.html   200
   ```

### Option 3: AWS S3 + CloudFront
For enterprise-level deployment with AWS.

1. **Build the Application**
   ```bash
   pnpm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://60secads-app
   aws s3 sync dist/ s3://60secads-app
   ```

3. **Configure S3 for Static Hosting**
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html`

4. **Set up CloudFront Distribution**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom error pages for SPA routing

### Option 4: Docker Deployment
For containerized deployments.

1. **Create Dockerfile**
   ```dockerfile
   # Build stage
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   
   # Production stage
   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/nginx.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create nginx.conf**
   ```nginx
   events {
     worker_connections 1024;
   }
   
   http {
     include /etc/nginx/mime.types;
     default_type application/octet-stream;
     
     server {
       listen 80;
       server_name localhost;
       root /usr/share/nginx/html;
       index index.html;
       
       location / {
         try_files $uri $uri/ /index.html;
       }
     }
   }
   ```

3. **Build and Run**
   ```bash
   docker build -t 60secads .
   docker run -p 80:80 60secads
   ```

## 🔧 Environment Configuration

### Required Environment Variables
```env
# Supabase Configuration (Required)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Analytics (Optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Stripe (Optional - for future payment integration)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx
```

### Development vs Production
- **Development**: Uses `.env` file
- **Production**: Set environment variables in your hosting platform

## 🗄 Database Setup (Supabase)

### 1. Create Supabase Project
1. Visit [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Database Schema
Run these SQL commands in Supabase SQL Editor:

```sql
-- Users table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Orders table
CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  platform TEXT NOT NULL,
  status TEXT DEFAULT 'draft',
  progress INTEGER DEFAULT 0,
  created_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  due_date TIMESTAMP WITH TIME ZONE,
  price INTEGER NOT NULL,
  project_data JSONB,
  notes TEXT,
  deliverables TEXT[]
);

-- Brand kits table
CREATE TABLE public.brand_kits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  brand_name TEXT,
  primary_color TEXT,
  secondary_color TEXT,
  accent_color TEXT,
  primary_font TEXT,
  secondary_font TEXT,
  logo_url TEXT,
  brand_voice TEXT,
  key_messages TEXT,
  tone_guidelines TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brand_kits ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders" ON public.orders
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own brand kit" ON public.brand_kits
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own brand kit" ON public.brand_kits
  FOR ALL USING (auth.uid() = user_id);
```

### 3. Authentication Setup
1. Configure authentication providers in Supabase dashboard
2. Set up email templates
3. Configure redirect URLs for your domain

## 🔍 SEO Configuration

### 1. Update Meta Tags
Edit `src/components/seo/SEOHead.tsx` with your domain:
```typescript
const fullUrl = url.startsWith('http') ? url : `https://yourdomain.com${url}`;
```

### 2. Update Sitemap
Edit `public/sitemap.xml` with your domain:
```xml
<loc>https://yourdomain.com/</loc>
```

### 3. Update Robots.txt
Edit `public/robots.txt` with your domain:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Verify tracking is working in GA4 Real-time reports

### Custom Events
The app includes custom event tracking:
- Sign up events
- Login events
- Order creation
- Payment events (when implemented)

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use different keys for development and production
- Rotate keys regularly

### Supabase Security
- Enable Row Level Security (RLS)
- Use proper policies for data access
- Regular security audits

### HTTPS
- Always use HTTPS in production
- Configure proper SSL certificates
- Use HSTS headers

## 📈 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
pnpm run build
npx vite-bundle-analyzer dist/stats.html
```

### CDN Configuration
- Use CDN for static assets
- Enable gzip compression
- Set proper cache headers

### Image Optimization
- Use WebP format when possible
- Implement lazy loading
- Optimize image sizes

## 🔧 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check TypeScript errors
   - Verify all dependencies are installed
   - Check environment variables

2. **Routing Issues**
   - Ensure server redirects all routes to index.html
   - Check React Router configuration

3. **Supabase Connection**
   - Verify environment variables
   - Check network connectivity
   - Validate API keys

4. **Styling Issues**
   - Check Tailwind CSS configuration
   - Verify custom CSS imports
   - Test responsive breakpoints

### Debug Mode
Enable debug logging:
```typescript
// In development
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}
```

## 📞 Support

For deployment issues:
- Check the GitHub Issues
- Review the documentation
- Contact support at hello@60secads.com

## 🚀 Going Live Checklist

- [ ] Environment variables configured
- [ ] Supabase database set up
- [ ] Custom domain configured
- [ ] SSL certificate installed
- [ ] Analytics tracking verified
- [ ] SEO meta tags updated
- [ ] Sitemap submitted to search engines
- [ ] Performance tested
- [ ] Security headers configured
- [ ] Backup strategy in place

---

Your 60sec Ads application is now ready for production! 🎉

