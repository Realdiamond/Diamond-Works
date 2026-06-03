import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/CTA";
import { ArrowRight, BookOpen, GraduationCap, Laptop, MapPin, Users, CheckCircle2, Clock } from "lucide-react";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Community Tech Skills Program",
  description: "Hands-on web development and WordPress training for students through remote, live sessions.",
  keywords: ["community training", "web development", "wordpress", "student tech skills", "remote learning"],
  canonical: "https://realdiamonddigital.studio/community",
});

const highlights = [
  {
    icon: GraduationCap,
    title: "Student-Focused Learning",
    description: "Beginner-friendly lessons that make tech feel accessible and practical.",
  },
  {
    icon: Laptop,
    title: "Hands-On Workshops",
    description: "Real projects students can show in a manifesto, portfolio, or school report.",
  },
  {
    icon: Users,
    title: "Small-Group Support",
    description: "Interactive sessions with time for questions, practice, and feedback.",
  },
  {
    icon: MapPin,
    title: "Remote Delivery",
    description: "Live online sessions that reach students wherever they are.",
  },
];

const skills = [
  "Web fundamentals: HTML, CSS, and basic JavaScript",
  "Building responsive pages for mobile and desktop",
  "WordPress setup, themes, and essential plugins",
  "Content management: pages, posts, and media",
  "Basic website security and maintenance habits",
  "Portfolio and presentation tips for students",
];

const CommunityPage = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-orb bg-orb-1 opacity-20" />
          <div className="bg-orb bg-orb-2 opacity-15" />
        </div>

        <div className="container-wide relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Community Training Initiative</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Teaching Students <span className="text-gradient">Real Tech Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This program is built to help students gain practical digital skills they can show in a school
              manifesto or future portfolio. The focus is on web development and WordPress, with hands-on
              projects, live sessions, and guided practice that build confidence and real-world ability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-to-r from-accent to-accent-secondary hover:shadow-glow text-white font-semibold" asChild>
                <Link href="/contact">
                  Book a School Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#skills">View Skills Taught</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-y border-border/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Program Snapshot</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Structured, Flexible, <span className="text-gradient">School-Ready</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I can work with schools, student leaders, and local organizers to deliver a focused training
                  program. The sessions are designed to be practical, engaging, and suitable for beginners.
                </p>
                <p>
                  Scheduling, class size, and support can be adjusted based on the school calendar. If a sponsor
                  is involved, we can align the format to the school’s goals and available time. Live session
                  hours are agreed in advance so students can attend consistently.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              {[
                { icon: MapPin, title: "Location", desc: "Remote (live online sessions)" },
                { icon: Clock, title: "Live Hours", desc: "Set times agreed with the school" },
                { icon: Users, title: "Audience", desc: "Secondary school students and youth groups" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Skills Taught</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Practical Skills Students Can <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-muted-foreground">
              The program focuses on web development and WordPress so students leave with tangible results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill} className="glass-card-hover p-8">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <p className="font-semibold text-foreground">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-y border-border/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Why It Matters</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Tangible, Credible <span className="text-gradient">Community Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This initiative gives student leaders a clear, measurable program to present while giving young
              people real digital skills. It is a practical way to invest in the community and prepare students
              for the modern workplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((item) => (
              <div key={item.title} className="glass-card-hover p-8 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Bring the Tech Skills Program to Your School"
        description="Share your school’s goals and preferred timing. I will reply with a simple plan and next steps."
        buttonText="Request a School Session"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default CommunityPage;
