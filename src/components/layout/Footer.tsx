import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Features', href: '/#features' },
      { label: 'Examples', href: '/#showcase' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refunds' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/60secads', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/60secads', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/60secads', label: 'YouTube' },
    { icon: Mail, href: 'mailto:hello@60secads.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">60</span>
              </div>
              <span className="text-white font-bold text-xl">60sec Ads</span>
            </Link>
            <p className="text-white/60 text-sm">
              Done-for-you, platform-ready video ads for TikTok, IG, YouTube, FB—delivered fast and built to convert.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} 60sec Ads. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Made with ❤️ for creators and brands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

