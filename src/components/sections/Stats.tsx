"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 50, label: "Projects Delivered", suffix: "+", prefix: "" },
  { value: 95, label: "Client Satisfaction", suffix: "%", prefix: "" },
  { value: 5, label: "Years Experience", suffix: "+", prefix: "" },
  { value: 3, label: "Average ROI", suffix: "x", prefix: "" },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 border-y border-border/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb-1 opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-secondary/5" />
      </div>

      <div className="container-wide relative">
        {/* Optional Header */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Proven Track Record of <span className="text-gradient">Success</span>
          </h3>
          <p className="text-muted-foreground">
            Real numbers from real client projects
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass-card p-6 md:p-8 group hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 transition-all duration-300 group-hover:scale-110">
                  {isVisible && (
                    <>
                      {stat.prefix}{stat.value}{stat.suffix}
                    </>
                  )}
                </div>
                {/* Accent line */}
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
              <div className="text-muted-foreground font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
