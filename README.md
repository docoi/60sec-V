# 60sec Ads - Video Ad Creation Platform

A production-ready React web application for selling high-converting social video ads, featuring a public marketing site and authenticated customer dashboard with modern glassmorphism design.

## 🚀 Features

### Public Marketing Site
- **Modern Glassmorphism Design** - Apple-adjacent visual style with glass effects and blur
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Meta tags, structured data, and sitemap included
- **Performance Optimized** - Fast loading with optimized assets

### Customer Dashboard
- **Order Management** - Create, track, and manage video ad orders
- **Brand Kit Setup** - Upload assets and define brand guidelines
- **Billing & Invoices** - Payment history and invoice management
- **Account Settings** - Profile management and security settings

### Technical Features
- **Authentication System** - Secure sign-up/sign-in with Supabase
- **Database Integration** - Ready for Supabase backend integration
- **Analytics Ready** - Google Analytics 4 integration
- **TypeScript** - Full type safety throughout the application
- **Modern Stack** - React 19, Vite, Tailwind CSS, Framer Motion

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Glassmorphism Components
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Backend**: Supabase (configuration included)
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 60sec-ads
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

4. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── glass/           # Glassmorphism components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   ├── auth/            # Authentication components
│   ├── seo/             # SEO components
│   └── analytics/       # Analytics components
├── pages/               # Page components
│   ├── dashboard/       # Dashboard pages
│   ├── Home.tsx
│   ├── Pricing.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── SignIn.tsx
│   └── SignUp.tsx
├── store/               # State management
├── lib/                 # Utilities and configurations
│   ├── utils.ts
│   └── supabase.ts
├── App.tsx              # Main app component
└── main.jsx             # Entry point
```

## 🎨 Design System

### Glassmorphism Components
- **GlassCard**: Translucent cards with blur effects
- **GlassButton**: Interactive buttons with glass styling
- **GlassInput**: Form inputs with glassmorphism design

### Color Palette
- **Primary**: #5AA6FF (Blue)
- **Secondary**: #8B5CF6 (Purple)
- **Accent**: #10B981 (Green)
- **Background**: Dark gradient with noise texture

### Typography
- **Primary Font**: Inter
- **Font Weights**: 400, 500, 600, 700, 800

## 🔐 Authentication

The application includes a complete authentication system:

- **Sign Up**: Email/password registration
- **Sign In**: Email/password login with demo credentials
- **Protected Routes**: Dashboard requires authentication
- **User Management**: Profile and account settings

### Demo Credentials
- **Email**: demo@60secads.com
- **Password**: demo123

## 📊 Dashboard Features

### Overview Page
- Welcome message with user's name
- Statistics cards (orders, completion rate, performance)
- Recent orders with progress tracking
- Quick action buttons

### New Order Page
- Multi-step order creation form
- Platform selection (TikTok, Instagram, YouTube, Facebook)
- Goal setting and audience targeting
- Creative direction and hook generation
- Add-ons and pricing calculation

### Orders Page
- Order listing with search and filters
- Status tracking and progress bars
- Order details and deliverables
- Download completed assets

### Brand Kit Page
- Logo and asset uploads
- Color palette configuration
- Typography settings
- Brand voice and messaging guidelines

### Billing Page
- Payment method management
- Invoice history and downloads
- Billing statistics and summaries

### Account Page
- Profile information management
- Password and security settings
- Two-factor authentication options
- Account deletion (danger zone)

## 🚀 Deployment

### Build for Production
```bash
pnpm run build
# or
npm run build
```

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Build the project: `pnpm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables

### Deploy to Custom Server
1. Build the project: `pnpm run build`
2. Serve the `dist` folder with any static file server
3. Configure environment variables on your server

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up the database schema (see `src/lib/supabase.ts` for table structures)
3. Configure authentication providers
4. Update environment variables

### Google Analytics
1. Create a GA4 property
2. Get your tracking ID
3. Add it to your environment variables

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🔍 SEO Features

- Dynamic meta tags with React Helmet
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Canonical URLs

## 🧪 Testing

The application includes:
- TypeScript for compile-time error checking
- Form validation with Zod schemas
- Responsive design testing
- Cross-browser compatibility

## 📈 Performance

- Code splitting with dynamic imports
- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: hello@60secads.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 🎯 Roadmap

- [ ] Payment integration with Stripe
- [ ] Real-time order updates
- [ ] File upload and management
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] API documentation
- [ ] Mobile app

---

Built with ❤️ using React, TypeScript, and modern web technologies.

