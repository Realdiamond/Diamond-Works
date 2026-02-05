import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

const blogPosts = [
  {
    slug: "seo-strategies-2024",
    title: "10 SEO Strategies That Actually Work in 2024",
    excerpt: "Discover the latest SEO techniques that drive real results for businesses looking to dominate search rankings.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "SEO",
  },
  {
    slug: "web-design-trends",
    title: "Web Design Trends Shaping the Digital Landscape",
    excerpt: "From glassmorphism to micro-interactions, explore the design trends that captivate modern audiences.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    category: "Design",
  },
  {
    slug: "conversion-optimization",
    title: "The Psychology Behind High-Converting Websites",
    excerpt: "Learn how understanding user psychology can dramatically improve your website's conversion rates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    category: "Growth",
  },
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb-2 opacity-10" />
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Latest Insights</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              From Our <span className="text-gradient">Blog</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild className="self-start md:self-auto">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card-hover overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 glass-card text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
