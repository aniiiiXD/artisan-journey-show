import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  accomplishments: string[];
  skills: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  icon: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Ad Auction Platform",
      subtitle: "Intelligent Advertisement Ecosystem",
      description: "Revolutionary platform combining graph theory and real-time auction mechanics to optimize advertisement placement and maximize revenue through sophisticated algorithmic approaches.",
      accomplishments: [
        "Engineered a Rust-based graph preference engine using bipartite ranking graphs",
        "Developed a sealed-bid ad auction system with real-time order book logic",
        "Implemented advanced preference algorithms for optimal ad-user matching",
        "Achieved 40% improvement in click-through rates compared to traditional systems"
      ],
      skills: ["Rust", "Graph Theory", "Real-time Systems", "Algorithm Design", "Auction Theory"],
      links: {
        github: "https://github.com",
        demo: "https://demo.example.com"
      },
      icon: "🎯"
    },
    {
      id: 2, 
      title: "DeFi Real-World Asset Platform",
      subtitle: "Blockchain Innovation for Traditional Assets",
      description: "Comprehensive platform for tokenizing real-world assets, featuring advanced liquidity mechanisms and sustainable tokenomics designed for institutional adoption.",
      accomplishments: [
        "Architected tokenization framework for real-world assets",
        "Designed sustainable tokenomics model with built-in liquidity incentives", 
        "Developed automated market-making algorithms for asset liquidity",
        "Led product strategy and technical implementation across full stack"
      ],
      skills: ["Solidity", "DeFi Protocols", "Tokenomics", "Smart Contracts", "Product Strategy"],
      links: {
        live: "https://swapso.io",
        github: "https://github.com"
      },
      icon: "⛓️"
    },
    {
      id: 3,
      title: "Medshield AI Data Pipeline",
      subtitle: "Healthcare Technology Automation",
      description: "Enterprise-grade data processing system that seamlessly integrates web scraping, LLM processing, and automated workflows for healthcare data management.",
      accomplishments: [
        "Built scalable web scraping pipelines handling 10M+ records daily",
        "Integrated LLM scripts for intelligent data processing and classification",
        "Implemented real-time data validation and quality assurance systems",
        "Reduced manual data processing time by 85% through automation"
      ],
      skills: ["Python", "Web Scraping", "LLM Integration", "Data Engineering", "Healthcare Tech"],
      links: {
        github: "https://github.com"
      },
      icon: "🏥"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12 bg-charcoal-light/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-off-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-subtle max-w-3xl mx-auto">
            A showcase of technical excellence across diverse domains - from AI systems to blockchain innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-card rounded-2xl p-8 shadow-subtle hover:shadow-elegant transition-all duration-500 elegant-hover border border-gold/20 hover:border-gold/40">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-off-white mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gold text-sm font-medium mb-4 uppercase tracking-wide">
                  {project.subtitle}
                </p>
                
                <p className="text-gray-subtle leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gold font-medium group-hover:underline">
                    View Details
                  </span>
                  <svg className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-gold/20">
            {selectedProject && (
              <div className="space-y-8">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{selectedProject.icon}</span>
                    <div>
                      <DialogTitle className="font-display text-3xl text-off-white">
                        {selectedProject.title}
                      </DialogTitle>
                      <p className="text-gold font-medium uppercase tracking-wide text-sm">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                  </div>
                </DialogHeader>

                <p className="text-gray-subtle text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="font-display text-xl font-semibold text-off-white mb-4">
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.accomplishments.map((accomplishment, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gold mt-1">•</span>
                        <span className="text-gray-subtle">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-xl font-semibold text-off-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium border border-gold/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.links.live && (
                    <Button variant="elegant" asChild>
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                        View Live
                      </a>
                    </Button>
                  )}
                  {selectedProject.links.github && (
                    <Button variant="elegantOutline" asChild>
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.links.demo && (
                    <Button variant="elegantOutline" asChild>
                      <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;