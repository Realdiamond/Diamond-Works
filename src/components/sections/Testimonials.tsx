import Link from "next/link";
import { Quote, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";

async function getTestimonials() {
  const testimonials = await client.fetch(`
    *[_type == "testimonial" && featured == true] | order(order asc) [0...3] {
      _id,
      quote,
      author,
      role,
      company,
      rating
    }
  `);
  return testimonials;
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb-2 opacity-15" />
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Client Success Stories</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Growing Businesses</span>
          </h2>
          <p className="text-muted-foreground">
            See what our clients have to say about working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={testimonial._id}
              className="glass-card-hover p-8 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/testimonials">
              View All Testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
