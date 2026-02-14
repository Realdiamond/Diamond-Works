import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion, token } from '../sanity/env';

// Create client with write token
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token, // This gives write permissions
});

const services = [
  {
    _type: 'service',
    _id: 'web-development',
    id: { _type: 'slug', current: 'web-development' },
    title: 'Web Design & Development',
    tagline: 'Custom websites that convert visitors into customers',
    icon: 'Globe',
    problem: "Your website is often the first impression potential customers have of your business. An outdated, slow, or poorly designed website costs you leads and damages your credibility.",
    solution: "We design and build modern, fast-loading websites that communicate your value proposition clearly and guide visitors toward taking action.",
    benefits: [
      "Custom designs tailored to your brand and goals",
      "Mobile-responsive layouts for all devices",
      "Fast loading speeds for better user experience",
      "Conversion-optimized page structures",
      "Easy-to-manage content systems",
    ],
    bestFor: "Businesses ready to invest in a professional online presence that actively generates leads.",
    subServices: [
      { _key: "custom-web-dev", name: "Custom Web Development", icon: "Code" },
      { _key: "wordpress-websites", name: "WordPress Websites", icon: "FileCode" },
      { _key: "website-maintenance", name: "Website Maintenance", icon: "Settings" }
    ],
    gradient: "from-accent to-cyan-400",
    order: 1,
    featured: true,
  },
  {
    _type: 'service',
    _id: 'seo',
    id: { _type: 'slug', current: 'seo' },
    title: 'SEO & Online Visibility',
    tagline: 'Get found by customers actively searching for your services',
    icon: 'Search',
    problem: "Without proper SEO, your website is invisible to the people who need your services most. You're losing business to competitors who rank higher in search results.",
    solution: "We implement comprehensive SEO strategies that improve your search rankings, increase organic traffic, and bring qualified leads to your website.",
    benefits: [
      "Higher rankings for your target keywords",
      "Increased organic traffic from search engines",
      "Better visibility in local search results",
      "Improved website structure for search engines",
      "Ongoing optimization and reporting",
    ],
    bestFor: "Businesses wanting sustainable, long-term growth through organic search traffic.",
    subServices: [
      { _key: "on-page-seo", name: "On-Page SEO", icon: "BarChart3" },
      { _key: "technical-seo", name: "Technical SEO", icon: "Settings" },
      { _key: "local-seo", name: "Local SEO", icon: "MapPin" }
    ],
    gradient: "from-accent-secondary to-pink-400",
    order: 2,
    featured: true,
  },
  {
    _type: 'service',
    _id: 'design',
    id: { _type: 'slug', current: 'design' },
    title: 'Brand & Visual Design',
    tagline: 'Professional design that communicates your value',
    icon: 'Palette',
    problem: "Inconsistent or amateur visuals undermine your credibility. When your brand looks unprofessional, potential customers question the quality of your services.",
    solution: "We create cohesive visual identities and professional designs that communicate competence, build trust, and make your brand memorable.",
    benefits: [
      "Consistent brand identity across all touchpoints",
      "Professional graphics that build credibility",
      "Designs that communicate your unique value",
      "Visual systems that scale with your business",
      "Marketing materials that convert",
    ],
    bestFor: "Businesses looking to establish or refresh their visual identity for a more professional market position.",
    subServices: [
      { _key: "logo-brand-identity", name: "Logo & Brand Identity", icon: "Palette" },
      { _key: "marketing-materials", name: "Marketing Materials", icon: "FileCode" },
      { _key: "social-media-graphics", name: "Social Media Graphics", icon: "Globe" }
    ],
    gradient: "from-orange-400 to-amber-400",
    order: 3,
    featured: true,
  },
  {
    _type: 'service',
    _id: 'growth',
    id: { _type: 'slug', current: 'growth' },
    title: 'Growth & Optimization',
    tagline: 'Continuous improvement for better business results',
    icon: 'TrendingUp',
    problem: "A website launch is just the beginning. Without ongoing optimization, your site's performance plateaus and you miss opportunities to improve conversion rates.",
    solution: "We implement data-driven optimization strategies that continuously improve your website's performance, user experience, and conversion rates over time.",
    benefits: [
      "Data-driven decisions based on real user behavior",
      "Improved website speed and performance",
      "Higher conversion rates through testing",
      "Regular performance monitoring and reporting",
      "Strategic recommendations for growth",
    ],
    bestFor: "Established businesses ready to maximize the return on their digital investments.",
    subServices: [
      { _key: "performance-optimization", name: "Performance Optimization", icon: "Zap" },
      { _key: "conversion-rate-optimization", name: "Conversion Rate Optimization", icon: "BarChart3" },
      { _key: "website-audits", name: "Website Audits", icon: "Settings" }
    ],
    gradient: "from-green-400 to-emerald-400",
    order: 4,
    featured: true,
  },
];

async function pushServices() {
  console.log('🚀 Starting to push services to Sanity...\n');

  for (const service of services) {
    try {
      console.log(`📝 Creating/updating: ${service.title}`);
      
      await client.createOrReplace(service);
      
      console.log(`✅ Successfully pushed: ${service.title}\n`);
    } catch (error) {
      console.error(`❌ Error pushing ${service.title}:`, error);
    }
  }

  console.log('🎉 All services pushed to Sanity!');
  console.log('\n📌 Next steps:');
  console.log('1. Check your Sanity Studio at http://localhost:3000/myworks');
  console.log('2. Verify all 4 services are there');
  console.log('3. They should automatically appear on your homepage!');
}

pushServices();
