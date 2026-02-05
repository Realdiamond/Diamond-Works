import { createClient } from '@sanity/client'
import { projects } from '../src/data/projects'
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, '../.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

// Helper to upload images from URLs
async function uploadImageFromUrl(imageUrl: string) {
  try {
    const response = await fetch(imageUrl)
    const buffer = await response.arrayBuffer()
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: imageUrl.split('/').pop() || 'image.jpg',
    })
    return asset._id
  } catch (error) {
    console.error('Error uploading image:', imageUrl, error)
    return null
  }
}

// Migrate Projects
async function migrateProjects() {
  console.log('\n🚀 Starting project migration...\n')

  for (const project of projects) {
    try {
      console.log(`📦 Migrating: ${project.title}`)

      // Upload main image
      const imageAssetId = await uploadImageFromUrl(project.image)

      // Upload gallery images
      const galleryImages = []
      if (project.gallery) {
        for (const imgUrl of project.gallery) {
          const assetId = await uploadImageFromUrl(imgUrl)
          if (assetId) {
            galleryImages.push({
              _type: 'image',
              asset: { _type: 'reference', _ref: assetId },
              alt: `${project.title} gallery image`,
            })
          }
        }
      }

      const sanityProject = {
        _type: 'project',
        title: project.title,
        slug: { _type: 'slug', current: project.slug },
        category: project.category,
        description: project.description,
        image: imageAssetId
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: imageAssetId },
              alt: project.title,
            }
          : undefined,
        tags: project.tags,
        results: project.results,
        client: project.client,
        challenge: project.challenge,
        solution: project.solution,
        strategy: project.strategy,
        services: project.services,
        testimonial: project.testimonial,
        gallery: galleryImages,
        duration: project.duration,
        year: project.year,
        featured: false,
        order: projects.indexOf(project),
      }

      await client.create(sanityProject)
      console.log(`✅ Successfully migrated: ${project.title}`)
    } catch (error) {
      console.error(`❌ Error migrating ${project.title}:`, error)
    }
  }

  console.log('\n✅ Project migration complete!\n')
}

// Migrate Sample Blog Posts
async function migrateBlogPosts() {
  console.log('\n🚀 Starting blog post migration...\n')

  const blogPosts = [
    {
      title: '10 Essential SEO Strategies for 2024',
      slug: '10-essential-seo-strategies-2024',
      excerpt:
        'Discover the latest SEO tactics that will help your business dominate search rankings this year.',
      category: 'SEO',
      author: 'Oluwatimilehin Akinsanmi',
      publishedDate: '2024-01-15',
      readTime: '8 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=600&fit=crop',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'SEO continues to evolve at a rapid pace. Here are the essential strategies you need to implement in 2024 to stay ahead of the competition.',
            },
          ],
        },
      ],
      featured: true,
    },
    {
      title: 'How to Choose the Right CMS for Your Business',
      slug: 'choose-right-cms-business',
      excerpt:
        'WordPress, Shopify, or custom? Learn how to select the perfect content management system for your needs.',
      category: 'Web Development',
      author: 'Oluwatimilehin Akinsanmi',
      publishedDate: '2024-01-20',
      readTime: '6 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Choosing the right CMS is crucial for your business success. This guide will help you make an informed decision.',
            },
          ],
        },
      ],
      featured: false,
    },
    {
      title: 'The Ultimate Guide to Website Speed Optimization',
      slug: 'website-speed-optimization-guide',
      excerpt:
        'Page speed is critical for SEO and conversions. Learn proven techniques to make your website lightning fast.',
      category: 'Optimization',
      author: 'Oluwatimilehin Akinsanmi',
      publishedDate: '2024-02-01',
      readTime: '10 min read',
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Website speed impacts everything from user experience to search rankings. Here is how to optimize your site for maximum performance.',
            },
          ],
        },
      ],
      featured: true,
    },
  ]

  for (const post of blogPosts) {
    try {
      console.log(`📝 Migrating blog post: ${post.title}`)

      const imageAssetId = await uploadImageFromUrl(post.imageUrl)

      const sanityPost = {
        _type: 'blog',
        title: post.title,
        slug: { _type: 'slug', current: post.slug },
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        author: post.author,
        publishedDate: new Date(post.publishedDate).toISOString(),
        readTime: post.readTime,
        image: imageAssetId
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: imageAssetId },
              alt: post.title,
            }
          : undefined,
        featured: post.featured,
      }

      await client.create(sanityPost)
      console.log(`✅ Successfully migrated blog: ${post.title}`)
    } catch (error) {
      console.error(`❌ Error migrating blog ${post.title}:`, error)
    }
  }

  console.log('\n✅ Blog post migration complete!\n')
}

// Migrate Testimonials
async function migrateTestimonials() {
  console.log('\n🚀 Starting testimonial migration...\n')

  const testimonials = [
    {
      quote:
        'Working with Diamond Works transformed our online presence. Traffic increased 200% and conversions tripled within 6 months.',
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Solutions',
      rating: 5,
      result: '+200% Traffic',
      type: 'text',
    },
    {
      quote:
        'The SEO strategy they implemented was game-changing. We now rank #1 for our most important keywords.',
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Urban Developments',
      rating: 5,
      result: '4.2x ROI',
      type: 'text',
    },
    {
      quote:
        'Exceptional service and results. The new website perfectly captures our brand and generates qualified leads daily.',
      author: 'Jennifer Walsh',
      role: 'Founder',
      company: 'GreenLeaf Consulting',
      rating: 5,
      result: '+300% Leads',
      type: 'text',
    },
  ]

  for (const testimonial of testimonials) {
    try {
      console.log(`💬 Migrating testimonial from: ${testimonial.author}`)

      const sanityTestimonial = {
        _type: 'testimonial',
        quote: testimonial.quote,
        author: testimonial.author,
        role: testimonial.role,
        company: testimonial.company,
        rating: testimonial.rating,
        result: testimonial.result,
        type: testimonial.type,
        featured: true,
        order: testimonials.indexOf(testimonial),
      }

      await client.create(sanityTestimonial)
      console.log(`✅ Successfully migrated testimonial from: ${testimonial.author}`)
    } catch (error) {
      console.error(`❌ Error migrating testimonial from ${testimonial.author}:`, error)
    }
  }

  console.log('\n✅ Testimonial migration complete!\n')
}

// Migrate Services
async function migrateServices() {
  console.log('\n🚀 Starting services migration...\n')

  const services = [
    {
      id: 'web-development',
      title: 'Web Design & Development',
      tagline: 'Beautiful, high-converting websites',
      icon: 'Globe',
      problem:
        'Your website is your digital storefront. An outdated or poorly designed site drives potential customers away.',
      solution:
        'We create stunning, user-friendly websites that convert visitors into customers and grow with your business.',
      benefits: [
        'Custom, responsive design',
        'Optimized for conversions',
        'Fast loading speeds',
        'Easy to update',
      ],
      bestFor: 'Businesses needing a professional online presence',
      gradient: 'from-accent to-cyan-400',
      order: 0,
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      tagline: 'Get found by customers actively searching',
      icon: 'Search',
      problem:
        'If your ideal customers cannot find you on Google, they are finding your competitors instead.',
      solution:
        'Our proven SEO strategies get you ranking on page one for keywords that drive real business results.',
      benefits: [
        'Higher search rankings',
        'Increased organic traffic',
        'Better quality leads',
        'Long-term ROI',
      ],
      bestFor: 'Businesses wanting sustainable growth through organic search',
      gradient: 'from-blue-500 to-cyan-500',
      order: 1,
    },
    {
      id: 'branding',
      title: 'Brand Identity & Strategy',
      tagline: 'Stand out in a crowded market',
      icon: 'Palette',
      problem:
        'Generic branding makes you forgettable. Without a clear identity, you compete only on price.',
      solution:
        'We craft compelling brand identities that resonate with your audience and differentiate you from competitors.',
      benefits: [
        'Memorable brand identity',
        'Professional visual system',
        'Clear brand messaging',
        'Consistent across all touchpoints',
      ],
      bestFor: 'Businesses ready to elevate their market position',
      gradient: 'from-purple-500 to-pink-500',
      order: 2,
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      tagline: 'Sell more, manage less',
      icon: 'ShoppingCart',
      problem:
        'Clunky checkout processes and poor user experience are costing you sales every single day.',
      solution:
        'We build streamlined e-commerce experiences that make buying easy and keep customers coming back.',
      benefits: [
        'Intuitive shopping experience',
        'Secure payment processing',
        'Inventory management',
        'Sales analytics',
      ],
      bestFor: 'Retailers ready to scale their online sales',
      gradient: 'from-orange-500 to-red-500',
      order: 3,
    },
  ]

  for (const service of services) {
    try {
      console.log(`🛠️ Migrating service: ${service.title}`)

      const sanityService = {
        _type: 'service',
        id: { _type: 'slug', current: service.id },
        title: service.title,
        tagline: service.tagline,
        icon: service.icon,
        problem: service.problem,
        solution: service.solution,
        benefits: service.benefits,
        bestFor: service.bestFor,
        gradient: service.gradient,
        order: service.order,
        featured: true,
      }

      await client.create(sanityService)
      console.log(`✅ Successfully migrated service: ${service.title}`)
    } catch (error) {
      console.error(`❌ Error migrating service ${service.title}:`, error)
    }
  }

  console.log('\n✅ Services migration complete!\n')
}

// Migrate FAQs
async function migrateFAQs() {
  console.log('\n🚀 Starting FAQ migration...\n')

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on scope and complexity. A standard website typically takes 8-12 weeks, while SEO campaigns show results within 3-6 months. We will provide a detailed timeline during our initial consultation.',
      category: 'general',
      order: 0,
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'We offer customized solutions based on your specific needs and goals. After understanding your requirements, we provide transparent, all-inclusive pricing with no hidden fees. Contact us for a detailed quote.',
      category: 'pricing',
      order: 1,
    },
    {
      question: 'Do you work with businesses in my industry?',
      answer:
        'We have experience across various industries including technology, healthcare, legal, retail, and professional services. Our strategies are customized to your specific industry and target audience.',
      category: 'general',
      order: 2,
    },
    {
      question: 'What makes Diamond Works different?',
      answer:
        'We focus on results, not vanity metrics. Every strategy we implement is designed to drive real business growth - more leads, more sales, and better ROI. Plus, we believe in transparent communication and measurable outcomes.',
      category: 'general',
      order: 3,
    },
  ]

  for (const faq of faqs) {
    try {
      console.log(`❓ Migrating FAQ: ${faq.question}`)

      const sanityFAQ = {
        _type: 'faq',
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
        order: faq.order,
        active: true,
      }

      await client.create(sanityFAQ)
      console.log(`✅ Successfully migrated FAQ: ${faq.question.substring(0, 50)}...`)
    } catch (error) {
      console.error(`❌ Error migrating FAQ:`, error)
    }
  }

  console.log('\n✅ FAQ migration complete!\n')
}

// Run all migrations
async function runMigrations() {
  try {
    console.log('\n🎯 Starting complete data migration to Sanity...\n')
    console.log('=' .repeat(60))

    await migrateProjects()
    await migrateBlogPosts()
    await migrateTestimonials()
    await migrateServices()
    await migrateFAQs()

    console.log('\n' + '='.repeat(60))
    console.log('\n🎉 MIGRATION COMPLETE! All data has been pushed to Sanity.\n')
    console.log('✅ Next steps:')
    console.log('   1. Check your Sanity Studio at http://localhost:3000/studio')
    console.log('   2. Verify all content is there')
    console.log('   3. Pages will be updated to fetch from Sanity next\n')
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

runMigrations()
