export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
  // Detailed info for project page
  client: {
    name: string;
    industry: string;
    size: string;
    location: string;
  };
  challenge: string;
  solution: string;
  strategy: string[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery?: string[];
  duration: string;
  year: string;
}

export const serviceCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Design" },
  { id: "seo", label: "SEO" },
  { id: "branding", label: "Branding" },
  { id: "ecommerce", label: "E-commerce" },
];

export const projects: Project[] = [
  {
    slug: "techstart-solutions",
    title: "TechStart Solutions",
    category: "web",
    description: "Complete website redesign resulting in 3x conversion rate improvement and first-page Google rankings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Web Design", "SEO", "WordPress"],
    results: ["3x Conversion Rate", "First Page Rankings", "50% Faster Load Time"],
    client: {
      name: "TechStart Solutions",
      industry: "Technology / SaaS",
      size: "50-100 employees",
      location: "San Francisco, CA",
    },
    challenge: "TechStart had an outdated website that failed to communicate their value proposition. Bounce rates were high, conversions were low, and they were invisible on search engines. They needed a complete digital overhaul to compete in the crowded SaaS market.",
    solution: "We designed a modern, conversion-focused website with clear messaging, intuitive user journeys, and compelling CTAs. Combined with technical SEO optimization and content strategy, we positioned them as industry leaders.",
    strategy: [
      "User research and competitor analysis",
      "Information architecture redesign",
      "Custom WordPress theme development",
      "On-page and technical SEO implementation",
      "Conversion rate optimization testing",
    ],
    services: ["Web Design", "WordPress Development", "SEO", "Content Strategy"],
    testimonial: {
      quote: "The new website completely transformed how prospects perceive us. We've seen a 3x increase in qualified leads within the first quarter.",
      author: "Michael Chen",
      role: "CEO, TechStart Solutions",
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    ],
    duration: "12 weeks",
    year: "2024",
  },
  {
    slug: "greenleaf-consulting",
    title: "GreenLeaf Consulting",
    category: "branding",
    description: "Full brand identity and website development for an environmental consulting firm.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    tags: ["Branding", "Web Design", "UI/UX"],
    results: ["Brand Recognition +200%", "Lead Generation +150%", "Client Retention +40%"],
    client: {
      name: "GreenLeaf Consulting",
      industry: "Environmental Consulting",
      size: "20-50 employees",
      location: "Portland, OR",
    },
    challenge: "GreenLeaf needed to differentiate themselves in a crowded environmental consulting space. Their existing brand felt generic and failed to convey their innovative approach to sustainability solutions.",
    solution: "We created a comprehensive brand identity that captures their commitment to innovation and sustainability. The new visual system works across all touchpoints, from business cards to their new website.",
    strategy: [
      "Brand discovery workshops",
      "Competitive positioning analysis",
      "Visual identity system design",
      "Brand guidelines development",
      "Website design and development",
    ],
    services: ["Brand Strategy", "Visual Identity", "Web Design", "Print Design"],
    testimonial: {
      quote: "Our new brand perfectly captures who we are. Clients now immediately understand our unique value proposition.",
      author: "Sarah Williams",
      role: "Founder, GreenLeaf Consulting",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    ],
    duration: "8 weeks",
    year: "2024",
  },
  {
    slug: "urban-developments",
    title: "Urban Developments",
    category: "seo",
    description: "Comprehensive SEO strategy that drove 200% organic traffic increase in six months.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["SEO", "Content Strategy", "Analytics"],
    results: ["200% Traffic Growth", "Top 3 for 50+ Keywords", "ROI Increase 4x"],
    client: {
      name: "Urban Developments",
      industry: "Real Estate Development",
      size: "100-200 employees",
      location: "New York, NY",
    },
    challenge: "Despite being a major player in urban development, Urban Developments had almost no organic search presence. Competitors were dominating search results for key industry terms.",
    solution: "We implemented a comprehensive SEO strategy focusing on technical optimization, content creation, and authority building. This included fixing site architecture, creating targeted content, and building quality backlinks.",
    strategy: [
      "Technical SEO audit and fixes",
      "Keyword research and mapping",
      "Content strategy development",
      "Link building campaign",
      "Monthly performance reporting",
    ],
    services: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
    testimonial: {
      quote: "We went from invisible to dominating search results in our market. The ROI on this investment has been incredible.",
      author: "James Morrison",
      role: "Marketing Director, Urban Developments",
    },
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    ],
    duration: "6 months",
    year: "2023",
  },
  {
    slug: "artisan-bakery",
    title: "Artisan Bakery Co.",
    category: "ecommerce",
    description: "Local SEO optimization and e-commerce integration for a growing bakery chain.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
    tags: ["Local SEO", "E-commerce", "WordPress"],
    results: ["500% Local Visibility", "Online Orders +300%", "5-Star Reviews +120"],
    client: {
      name: "Artisan Bakery Co.",
      industry: "Food & Beverage",
      size: "10-20 employees",
      location: "Austin, TX",
    },
    challenge: "Artisan Bakery wanted to expand beyond their physical locations and capture online orders. They also struggled with local visibility despite having loyal customers.",
    solution: "We built a WooCommerce store with local delivery integration and implemented a comprehensive local SEO strategy including Google Business optimization and review management.",
    strategy: [
      "WooCommerce store setup",
      "Local delivery system integration",
      "Google Business Profile optimization",
      "Review generation campaign",
      "Local citation building",
    ],
    services: ["E-commerce Development", "Local SEO", "WordPress", "Digital Marketing"],
    testimonial: {
      quote: "Online orders now account for 40% of our revenue. The local SEO work has made us the go-to bakery in our area.",
      author: "Maria Garcia",
      role: "Owner, Artisan Bakery Co.",
    },
    gallery: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
    ],
    duration: "10 weeks",
    year: "2024",
  },
  {
    slug: "fitlife-studios",
    title: "FitLife Studios",
    category: "web",
    description: "Custom booking system and website for a premium fitness studio chain.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    tags: ["Web App", "Booking System", "Mobile-First"],
    results: ["Booking Rate +250%", "No-Shows -60%", "Member Retention +45%"],
    client: {
      name: "FitLife Studios",
      industry: "Health & Fitness",
      size: "30-50 employees",
      location: "Miami, FL",
    },
    challenge: "FitLife was using multiple disconnected systems for bookings, payments, and member management. This led to double-bookings, missed appointments, and frustrated customers.",
    solution: "We built a custom web application with integrated booking, automated reminders, and member portal. The mobile-first design ensures members can book classes on the go.",
    strategy: [
      "Requirements gathering and system design",
      "Custom booking engine development",
      "Payment integration",
      "Automated reminder system",
      "Member portal development",
    ],
    services: ["Web Application", "UI/UX Design", "Custom Development", "System Integration"],
    testimonial: {
      quote: "The new system has transformed our operations. Members love how easy it is to book, and no-shows have dropped dramatically.",
      author: "David Park",
      role: "Operations Director, FitLife Studios",
    },
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
    ],
    duration: "16 weeks",
    year: "2024",
  },
  {
    slug: "legal-partners",
    title: "Legal Partners LLP",
    category: "web",
    description: "Trust-focused website redesign for a law firm, emphasizing credibility and lead capture.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    tags: ["Web Design", "Lead Generation", "SEO"],
    results: ["Consultation Requests +180%", "Time on Site +90%", "Bounce Rate -40%"],
    client: {
      name: "Legal Partners LLP",
      industry: "Legal Services",
      size: "20-30 employees",
      location: "Chicago, IL",
    },
    challenge: "Legal Partners had an outdated website that didn't reflect their expertise or professionalism. Potential clients were leaving without making contact, choosing competitors with better digital presence.",
    solution: "We designed a trust-focused website with attorney profiles, case results, and clear practice area pages. Strategic CTAs and live chat integration improved lead capture significantly.",
    strategy: [
      "Legal industry UX research",
      "Trust-building design elements",
      "Attorney profile optimization",
      "Lead capture funnel design",
      "Local SEO implementation",
    ],
    services: ["Web Design", "Lead Generation", "SEO", "Content Strategy"],
    testimonial: {
      quote: "Our new website finally reflects the caliber of our firm. We've seen a significant increase in quality consultation requests.",
      author: "Patricia Thompson",
      role: "Managing Partner, Legal Partners LLP",
    },
    gallery: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop",
    ],
    duration: "10 weeks",
    year: "2023",
  },
  // Additional SEO Projects
  {
    slug: "metro-dental-group",
    title: "Metro Dental Group",
    category: "seo",
    description: "Local SEO domination for a multi-location dental practice across 5 cities.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    tags: ["Local SEO", "Healthcare", "Multi-location"],
    results: ["450% Local Traffic", "Top 3 in 5 Cities", "New Patients +200%"],
    client: {
      name: "Metro Dental Group",
      industry: "Healthcare / Dental",
      size: "40-60 employees",
      location: "Dallas, TX",
    },
    challenge: "With 5 locations across the Dallas metro area, Metro Dental struggled to rank locally for each office. Patients couldn't find their nearest location online.",
    solution: "We implemented a multi-location SEO strategy with unique landing pages, localized content, and optimized Google Business Profiles for each location.",
    strategy: [
      "Location-specific keyword research",
      "Individual Google Business optimization",
      "Local landing page creation",
      "Review generation system",
      "Local link building campaign",
    ],
    services: ["Local SEO", "Content Strategy", "Google Business Optimization", "Link Building"],
    testimonial: {
      quote: "Each of our locations now ranks in the top 3 for dental services in their area. The patient inquiries have been incredible.",
      author: "Dr. Robert Kim",
      role: "Practice Owner, Metro Dental Group",
    },
    gallery: [],
    duration: "4 months",
    year: "2024",
  },
  {
    slug: "summit-financial",
    title: "Summit Financial Advisors",
    category: "seo",
    description: "Authority-building SEO strategy for a wealth management firm targeting high-net-worth clients.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    tags: ["SEO", "Finance", "Content Marketing"],
    results: ["Organic Leads +320%", "Domain Authority +25", "Featured Snippets 15+"],
    client: {
      name: "Summit Financial Advisors",
      industry: "Financial Services",
      size: "15-25 employees",
      location: "Boston, MA",
    },
    challenge: "Summit needed to establish thought leadership in a competitive financial services market while attracting high-net-worth individuals through organic search.",
    solution: "We developed a comprehensive content and SEO strategy focused on high-value financial topics, E-E-A-T optimization, and strategic link building.",
    strategy: [
      "High-value keyword targeting",
      "Expert content development",
      "Author authority building",
      "Featured snippet optimization",
      "Financial publication outreach",
    ],
    services: ["Technical SEO", "Content Strategy", "Link Building", "Authority Building"],
    testimonial: {
      quote: "Our organic traffic now brings in more qualified leads than our paid campaigns. The ROI has been exceptional.",
      author: "Jennifer Walsh",
      role: "CMO, Summit Financial Advisors",
    },
    gallery: [],
    duration: "8 months",
    year: "2024",
  },
  // Additional Branding Projects
  {
    slug: "nourish-wellness",
    title: "Nourish Wellness Co.",
    category: "branding",
    description: "Complete brand transformation for a holistic wellness startup entering the premium market.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    tags: ["Branding", "Wellness", "Packaging"],
    results: ["Brand Value +400%", "Retail Partnerships +15", "Social Following 50K"],
    client: {
      name: "Nourish Wellness Co.",
      industry: "Health & Wellness",
      size: "10-20 employees",
      location: "Los Angeles, CA",
    },
    challenge: "Nourish had great products but a generic brand that got lost among competitors. They needed a premium identity to enter high-end retail.",
    solution: "We created a sophisticated brand identity with organic textures, a calming color palette, and premium packaging that stands out on retail shelves.",
    strategy: [
      "Brand positioning workshop",
      "Visual identity design",
      "Packaging system development",
      "Brand guidelines creation",
      "Social media brand rollout",
    ],
    services: ["Brand Strategy", "Visual Identity", "Packaging Design", "Social Media Branding"],
    testimonial: {
      quote: "Our new brand opened doors to retailers who previously wouldn't consider us. It's been transformative for our business.",
      author: "Amanda Foster",
      role: "Founder, Nourish Wellness Co.",
    },
    gallery: [],
    duration: "10 weeks",
    year: "2024",
  },
  {
    slug: "forge-creative",
    title: "Forge Creative Agency",
    category: "branding",
    description: "Bold rebrand for a creative agency wanting to attract larger enterprise clients.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    tags: ["Branding", "Agency", "Identity"],
    results: ["Enterprise Clients +5", "Project Value +150%", "Industry Awards 3"],
    client: {
      name: "Forge Creative Agency",
      industry: "Creative Services",
      size: "25-40 employees",
      location: "Seattle, WA",
    },
    challenge: "Forge was winning small projects but couldn't break into the enterprise market. Their brand felt too playful for corporate decision-makers.",
    solution: "We developed a bold, confident brand identity that balances creativity with professionalism, positioning them as a serious partner for enterprise projects.",
    strategy: [
      "Market positioning analysis",
      "Brand personality refinement",
      "Visual system redesign",
      "Case study presentation design",
      "Sales collateral development",
    ],
    services: ["Brand Strategy", "Visual Identity", "Print Design", "Presentation Design"],
    testimonial: {
      quote: "Within months of the rebrand, we landed our first Fortune 500 client. The investment paid for itself immediately.",
      author: "Marcus Chen",
      role: "Creative Director, Forge Creative Agency",
    },
    gallery: [],
    duration: "6 weeks",
    year: "2023",
  },
  // Additional E-commerce Projects
  {
    slug: "heritage-leather",
    title: "Heritage Leather Goods",
    category: "ecommerce",
    description: "Luxury e-commerce experience for a premium leather goods brand with custom product configurator.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Luxury", "Shopify"],
    results: ["Revenue +280%", "AOV +65%", "Conversion Rate 4.2%"],
    client: {
      name: "Heritage Leather Goods",
      industry: "Luxury Retail",
      size: "15-25 employees",
      location: "Nashville, TN",
    },
    challenge: "Heritage's products are handcrafted and premium, but their old website felt cheap and didn't justify the price point. Custom orders were handled manually via email.",
    solution: "We built a luxury Shopify experience with high-end visuals, a custom product configurator for personalization, and seamless checkout that matches the brand quality.",
    strategy: [
      "Luxury UX research and design",
      "Custom product configurator build",
      "High-end photography direction",
      "Shopify Plus implementation",
      "Email automation setup",
    ],
    services: ["E-commerce Development", "UX Design", "Shopify Plus", "Email Marketing"],
    testimonial: {
      quote: "Our online store finally matches the quality of our products. The custom configurator has significantly increased average order value.",
      author: "Thomas Wright",
      role: "Owner, Heritage Leather Goods",
    },
    gallery: [],
    duration: "14 weeks",
    year: "2024",
  },
  {
    slug: "plantbox-subscriptions",
    title: "PlantBox",
    category: "ecommerce",
    description: "Subscription-based e-commerce platform for a plant delivery service with recurring billing.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Subscriptions", "WooCommerce"],
    results: ["Subscribers 2,500+", "Churn Rate -40%", "LTV +85%"],
    client: {
      name: "PlantBox",
      industry: "E-commerce / Subscriptions",
      size: "5-10 employees",
      location: "Denver, CO",
    },
    challenge: "PlantBox had a great subscription concept but their checkout was clunky, causing high cart abandonment. Managing recurring orders was a nightmare.",
    solution: "We built a streamlined subscription platform with flexible plans, easy account management, and automated delivery scheduling that reduced churn significantly.",
    strategy: [
      "Subscription UX optimization",
      "WooCommerce Subscriptions setup",
      "Customer portal development",
      "Delivery scheduling system",
      "Retention email sequences",
    ],
    services: ["E-commerce Development", "WooCommerce", "Email Automation", "UX Design"],
    testimonial: {
      quote: "Cart abandonment dropped 60% after the redesign. Customers love how easy it is to manage their subscriptions now.",
      author: "Lisa Park",
      role: "Founder, PlantBox",
    },
    gallery: [],
    duration: "12 weeks",
    year: "2024",
  },
  // Additional Web Projects
  {
    slug: "catalyst-ventures",
    title: "Catalyst Ventures",
    category: "web",
    description: "Investor-focused website for a venture capital firm showcasing portfolio and thought leadership.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop",
    tags: ["Web Design", "Finance", "Corporate"],
    results: ["Deal Flow +150%", "Portfolio Applications +200%", "Media Mentions 25+"],
    client: {
      name: "Catalyst Ventures",
      industry: "Venture Capital",
      size: "10-15 employees",
      location: "San Francisco, CA",
    },
    challenge: "Catalyst's website was outdated and didn't reflect their successful track record. Startups and LPs couldn't easily understand their investment thesis or portfolio.",
    solution: "We designed a sophisticated website that clearly communicates their investment focus, showcases portfolio success stories, and positions partners as industry thought leaders.",
    strategy: [
      "Stakeholder interviews",
      "Portfolio showcase design",
      "Partner profile optimization",
      "Thought leadership content",
      "Investor relations section",
    ],
    services: ["Web Design", "Content Strategy", "UX Design", "Development"],
    testimonial: {
      quote: "The new website has significantly improved our deal flow quality. Founders now approach us already understanding our thesis.",
      author: "Rachel Sterling",
      role: "Managing Partner, Catalyst Ventures",
    },
    gallery: [],
    duration: "8 weeks",
    year: "2024",
  },
  {
    slug: "aurora-architecture",
    title: "Aurora Architecture Studio",
    category: "web",
    description: "Portfolio website for an award-winning architecture firm with immersive project galleries.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    tags: ["Web Design", "Portfolio", "Architecture"],
    results: ["Project Inquiries +220%", "Time on Site 4min+", "Awards Featured 12"],
    client: {
      name: "Aurora Architecture Studio",
      industry: "Architecture",
      size: "20-30 employees",
      location: "Miami, FL",
    },
    challenge: "Aurora had stunning projects but their website didn't do them justice. Images were small, navigation was confusing, and their award-winning work was hard to find.",
    solution: "We created an immersive portfolio experience with full-screen imagery, intuitive project categorization, and smooth transitions that let the architecture speak for itself.",
    strategy: [
      "Visual hierarchy optimization",
      "Full-screen gallery design",
      "Project categorization system",
      "Performance optimization",
      "Award showcase integration",
    ],
    services: ["Web Design", "UX Design", "Development", "Performance Optimization"],
    testimonial: {
      quote: "Our website finally matches the quality of our work. Clients often mention the website as a reason they reached out.",
      author: "Carlos Mendez",
      role: "Principal, Aurora Architecture Studio",
    },
    gallery: [],
    duration: "10 weeks",
    year: "2024",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
