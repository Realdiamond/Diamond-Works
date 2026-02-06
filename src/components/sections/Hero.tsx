"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Palette, Zap } from "lucide-react";

const services = [
  { icon: Globe, label: "Web Design", color: "from-blue-500 to-cyan-500" },
  { icon: Search, label: "SEO", color: "from-green-500 to-emerald-500" },
  { icon: Palette, label: "Branding", color: "from-purple-500 to-pink-500" },
  { icon: Zap, label: "Lead Gen", color: "from-orange-500 to-red-500" },
];

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 bg-accent top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 bg-accent-secondary bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-wide relative z-10 text-center px-4">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Massive Headline */}
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter animate-fade-in">
            More Calls.
            <br />
            <span className="text-gradient">More Revenue.</span>
          </h1>

          {/* Punchy Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We build high-converting websites and run local SEO for service businesses that want real results.
          </p>

          {/* Single Strong CTA */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="xl" 
              asChild 
              className="group bg-gradient-to-r from-accent to-accent-secondary hover:shadow-glow text-white font-bold text-lg px-10 py-7 h-auto"
            >
              <Link href="/contact#consultation">
                Get Your Free Strategy Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Floating Service Cards */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.label}
                    className="group glass-card px-6 py-4 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-foreground">{service.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Indicator */}
          <div className="pt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Trusted by 50+ service businesses • 3x average increase in calls
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
