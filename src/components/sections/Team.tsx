import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Oluwatimilehin Akinsanmi",
    role: "CEO & Lead Strategist",
    initials: "OA",
    bio: "Leads strategy and ensures every project delivers measurable results.",
    gradient: "from-accent to-accent-secondary",
  },
  {
    name: "Design Lead",
    role: "UI/UX Designer",
    initials: "DL",
    bio: "Creates stunning, user-focused designs that convert visitors into customers.",
    gradient: "from-accent-secondary to-accent",
  },
  {
    name: "Dev Lead",
    role: "Senior Developer",
    initials: "DV",
    bio: "Builds fast, secure, and scalable websites with clean code.",
    gradient: "from-accent to-emerald-400",
  },
  {
    name: "SEO Specialist",
    role: "Growth & SEO",
    initials: "SE",
    bio: "Drives organic traffic and visibility through data-driven SEO strategies.",
    gradient: "from-purple-500 to-accent-secondary",
  },
];

const Team = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Our Team</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient">Diamond Team</span>
          </h2>
          <p className="text-muted-foreground">
            A small, senior team dedicated to delivering exceptional results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="glass-card-hover p-8 text-center group"
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-105 transition-transform duration-300`}>
                <span className="font-heading text-2xl font-bold text-white">{member.initials}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
              
              <div className="flex items-center justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-accent" />
                </button>
                <button className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors">
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-accent" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="glass" asChild>
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
