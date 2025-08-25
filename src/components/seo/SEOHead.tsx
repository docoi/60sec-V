import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = '60sec Ads - Turn Scrollers into Buyers in 60 Seconds',
  description = 'Done-for-you, platform-ready video ads for TikTok, IG, YouTube, FB—delivered fast and built to convert. $97 flat rate, no hidden fees.',
  keywords = 'video ads, social media marketing, TikTok ads, Instagram ads, YouTube ads, Facebook ads, conversion optimization, video marketing',
  image = '/og-image.jpg',
  url = 'https://60secads.com',
  type = 'website',
  noIndex = false,
}) => {
  const fullTitle = title.includes('60sec Ads') ? title : `${title} - 60sec Ads`;
  const fullUrl = url.startsWith('http') ? url : `https://60secads.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://60secads.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="60sec Ads" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="60sec Ads" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#5AA6FF" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "60sec Ads",
          "description": description,
          "url": "https://60secads.com",
          "logo": "https://60secads.com/logo.png",
          "sameAs": [
            "https://twitter.com/60secads",
            "https://linkedin.com/company/60secads"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hello@60secads.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

