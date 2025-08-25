import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Pages
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

// Dashboard Pages
import Dashboard from '@/pages/dashboard/Dashboard';
import DashboardOverview from '@/pages/dashboard/Overview';
import NewOrder from '@/pages/dashboard/NewOrder';
import Orders from '@/pages/dashboard/Orders';
import BrandKit from '@/pages/dashboard/BrandKit';
import Billing from '@/pages/dashboard/Billing';
import Account from '@/pages/dashboard/Account';

// Components
import ProtectedRoute from '@/components/auth/ProtectedRoute';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardOverview />} />
              <Route path="new-order" element={<NewOrder />} />
              <Route path="orders" element={<Orders />} />
              <Route path="brand-kit" element={<BrandKit />} />
              <Route path="billing" element={<Billing />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

