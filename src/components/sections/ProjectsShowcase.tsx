"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";
import { useState } from "react";

const ProjectsShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb bg-orb-2 opacity-10" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Real Results, Real Impact
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Recent Projects That{" "}
            <span className="text-gradient">Delivered Results</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See how we've helped businesses like yours achieve measurable growth through 
            strategic design, development, and digital marketing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass-card overflow-hidden h-full transition-all duration-500 group-hover:shadow-elevated group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/10 to-accent-secondary/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-accent font-medium text-sm mb-2">
                        <ExternalLink className="w-4 h-4" />
                        View Case Study
                      </div>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold rounded-full">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Key Results
                    </p>
                    <div className="space-y-2">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            50+ successful projects and counting
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
