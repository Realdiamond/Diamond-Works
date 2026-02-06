# Complete SEO Setup Guide for RealDiamond Digital

## ✅ What's Already Implemented

### 1. **Technical SEO Foundation**
- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Robots.txt file
- ✅ XML Sitemap (dynamically generated)
- ✅ Structured Data (JSON-LD) for Organization
- ✅ Mobile-responsive design
- ✅ Fast page load (Next.js optimization)

### 2. **On-Page SEO**
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text ready for images
- ✅ Internal linking structure
- ✅ Clean URL structure

### 3. **Content SEO**
- ✅ Blog system with SEO-optimized templates
- ✅ Dynamic meta descriptions per page
- ✅ Schema markup for articles

## 🔧 Setup Instructions

### Step 1: Configure Environment Variables

Add to your `.env.local`:
\`\`\`bash
NEXT_PUBLIC_SITE_URL=https://realdiamondworks.com
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=akinsanmioluwatimilehin@gmail.com
\`\`\`

### Step 2: Set Up Email Service (Resend - Recommended)

1. Go to https://resend.com
2. Sign up for free account
3. Verify your domain (realdiamondworks.com)
4. Get your API key
5. Add to `.env.local`

### Step 3: Update Organization Info

Edit `/app/layout.tsx` and update:
- Company address
- Phone number
- Social media links

### Step 4: Add OG Images

Create these images in `/public/`:
- `og-image.png` (1200x630px) - Default Open Graph image
- `logo.png` - Company logo

### Step 5: Submit Sitemap to Search Engines

After deployment:

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add your property (realdiamondworks.com)
3. Verify ownership
4. Submit sitemap: https://realdiamondworks.com/sitemap.xml

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap

### Step 6: Set Up Google Analytics (Optional)

1. Create GA4 property
2. Get Measurement ID
3. Add to `.env.local`: \`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX\`
4. Add tracking code to `app/layout.tsx`

### Step 7: Schema Markup for Each Page Type

For blog posts, add this in `/app/blog/[slug]/page.tsx`:
\`\`\`typescript
import { generateArticleSchema } from '@/lib/schema';

// In component
const articleSchema = generateArticleSchema({
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.publishedDate,
  dateModified: post._updatedAt,
  author: post.author || "RealDiamond Digital Team",
  publisher: {...}, // Your org data
});

// Add to head
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
/>
\`\`\`

### Step 8: Create Content with SEO Best Practices

**Blog Posts in Sanity:**
- Title: 50-60 characters, include target keyword
- Meta Description: 150-160 characters, compelling CTA
- URL slug: lowercase, hyphens, include keyword
- Headings: Use H2, H3 hierarchy
- Images: Add alt text with keywords
- Internal links: Link to 2-3 related pages
- Word count: Aim for 1500+ words for pillar content

**Keywords to Target:**
- web design services
- custom web development
- SEO services [your city]
- digital marketing agency
- ecommerce website development
- website optimization services
- [your city] web design agency

## 📊 SEO Checklist for Each Blog Post

- [ ] Target keyword in title
- [ ] Target keyword in first paragraph
- [ ] Meta description with keyword
- [ ] URL slug with keyword
- [ ] 3-5 H2 headings with related keywords
- [ ] At least 3 images with alt text
- [ ] 2-3 internal links
- [ ] 1-2 external authority links
- [ ] 1200+ words
- [ ] FAQ section (if applicable)
- [ ] Call-to-action at the end

## 🚀 Advanced SEO Features to Add Later

1. **Local SEO** (if applicable)
   - Google Business Profile
   - Local schema markup
   - NAP consistency

2. **Performance**
   - Image optimization (already using Next.js Image)
   - Core Web Vitals monitoring
   - CDN setup (Vercel handles this)

3. **Link Building**
   - Guest posting
   - Directory submissions
   - Social sharing

4. **Content Strategy**
   - Pillar pages
   - Topic clusters
   - Regular publishing schedule

## 📈 Monitoring & Tools

**Essential Tools:**
- Google Search Console (track rankings, errors)
- Google Analytics (track traffic, conversions)
- Ahrefs or SEMrush (keyword research, backlinks)
- PageSpeed Insights (performance)

## ⚡ Quick Wins

1. Ensure all images have descriptive alt text
2. Add internal links between related blog posts
3. Create 10-15 high-quality blog posts
4. Get 5-10 quality backlinks
5. Optimize page load speed (<3 seconds)
6. Mobile-first approach (already done)

## 🎯 Priority Actions This Week

1. ✅ Set up Resend for contact form
2. ✅ Add your company info to layout.tsx
3. ✅ Create og-image.png
4. ✅ Submit sitemap to Google Search Console
5. ✅ Write 3 SEO-optimized blog posts

---

## Need Help?

All SEO utilities are in:
- `/src/lib/seo.ts` - Metadata generation
- `/src/lib/schema.ts` - JSON-LD schema
- `/app/sitemap.ts` - Sitemap generation

Update these files as your site grows!
