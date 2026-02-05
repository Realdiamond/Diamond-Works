const TrustedBySection = () => {
  const clients = [
    { name: "TechFlow", initials: "TF" },
    { name: "GrowthLab", initials: "GL" },
    { name: "Nexus Co", initials: "NC" },
    { name: "Vertex", initials: "VX" },
    { name: "Momentum", initials: "MM" },
    { name: "Synergy", initials: "SY" },
    { name: "Horizon", initials: "HZ" },
    { name: "Pulse", initials: "PL" },
    { name: "Quantum", initials: "QT" },
    { name: "Stellar", initials: "ST" },
  ];

  // Triple the array for seamless infinite scroll
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background border-y border-border/50 overflow-hidden">
      <div className="container-wide mb-8">
        <div className="text-center">
          <p className="text-base font-semibold text-gradient">
            Trusted by innovative companies
          </p>
        </div>
      </div>

      {/* Scrolling Logo Carousel */}
      <div className="relative">
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee hover:pause">
          {tripleClients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-12 group cursor-default"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="font-heading font-bold text-xl text-white">{client.initials}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
