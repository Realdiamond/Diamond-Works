import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom websites and WordPress builds that combine stunning design with powerful functionality to convert visitors into customers.",
    link: "/services#web-development",
    gradient: "from-accent to-cyan-400",
  },
  {
    icon: Search,
    title: "SEO & Online Visibility",
    description: "Strategic SEO solutions including on-page, technical, and local optimization to increase your online visibility and organic traffic.",
    link: "/services#seo",
    gradient: "from-accent-secondary to-pink-400",
  },
  {
    icon: Palette,
    title: "Brand & Visual Design",
    description: "Professional graphic design and visual identity systems that communicate your brand's value and create lasting impressions.",
    link: "/services#design",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description: "Website optimization and growth systems that improve performance, user experience, and conversion rates over time.",
    link: "/services#growth",
    gradient: "from-green-400 to-emerald-400",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb-3 opacity-20" />
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Digital Solutions That{" "}
            <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't just build websites—we create digital ecosystems that help your business attract, 
            engage, and convert your ideal customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.link}
              className="group glass-card-hover p-8 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="accent" size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
