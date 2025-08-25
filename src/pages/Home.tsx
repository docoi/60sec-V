import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout';
import { 
  Hero, 
  HowItWorks, 
  Features, 
  Showcase, 
  FAQ, 
  CTA 
} from '@/components/sections';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>60sec Ads - Turn Scrollers into Buyers in 60 Seconds</title>
        <meta 
          name="description" 
          content="Done-for-you, platform-ready video ads for TikTok, IG, YouTube, FB—delivered fast and built to convert. $97 flat rate, no hidden fees." 
        />
        <meta property="og:title" content="60sec Ads - Turn Scrollers into Buyers in 60 Seconds" />
        <meta property="og:description" content="Done-for-you, platform-ready video ads for TikTok, IG, YouTube, FB—delivered fast and built to convert. $97 flat rate, no hidden fees." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://60secads.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="60sec Ads - Turn Scrollers into Buyers in 60 Seconds" />
        <meta name="twitter:description" content="Done-for-you, platform-ready video ads for TikTok, IG, YouTube, FB—delivered fast and built to convert. $97 flat rate, no hidden fees." />
      </Helmet>
      
      <Layout>
        <Hero />
        <HowItWorks />
        <Features />
        <Showcase />
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
};

export default Home;

