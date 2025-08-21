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
        "id": 1,
        "title": "FIRA RoboWorld Cup 2024, Brazil Challenge for 1:8 Self Driving Car",
        "subtitle": "Self-Driving Car Challenge",
        "description": "Represented India and IIT Bombay at the international finals of the FIRA Autonomous Car Challenge in Brazil[cite: 4]. The project involved designing and implementing algorithms for a 1:8 scale self-driving car.",
        "accomplishments": [
          "Designed and implemented a Goal Marking Algorithm and Sign Detection Filter using NumPy and Scikit-Learn[cite: 4].",
          "Developed and tested 5 ROS nodes using Python and C++ for sub-system integration[cite: 4].",
          "Utilized parallel programming to reduce computation time of asynchronous functions by 40%[cite: 4]."
        ],
        "skills": ["Python", "C++", "ROS", "NumPy", "Scikit-Learn", "Parallel Programming", "Linux"],
        "links": {},
        "icon": "🏎️"
      },
      {
        "id": 2,
        "title": "AI-Powered Ad Auction Platform",
        "subtitle": "Intelligent Ad Auction System",
        "description": "A self-project focused on building an intelligent ad auction system using AI agents and advanced data structures[cite: 8].",
        "accomplishments": [
          "Developed AI agent workflows using LangChain and LLMs for user intent parsing and preference extraction[cite: 8].",
          "Built a Rust-based graph preference engine using bipartite ranking graphs and min-heaps[cite: 8].",
          "Engineered a sealed-bid ad auction system in Rust with real-time order book logic and priority queues[cite: 8]."
        ],
        "skills": ["Rust", "LangChain", "LLMs", "Graph Theory", "Real-time Systems", "Auction Theory"],
        "links": {},
        "icon": "📈"
      },
      {
        "id": 3,
        "title": "DePIN-Based Uptime Monitoring Protocol",
        "subtitle": "Distributed Systems and Solana",
        "description": "A decentralized uptime monitoring network that leverages DePIN principles and a hybrid TypeScript/Rust stack[cite: 12, 13].",
        "accomplishments": [
          "Engineered a decentralized uptime monitoring network that pings websites every 180s[cite: 13].",
          "Designed a WebSocket-driven hub to dynamically route pings to available validators[cite: 13].",
          "Authored a Rust-based Solana smart contract for validator staking logic and reward incentivization[cite: 13]."
        ],
        "skills": ["TypeScript", "Rust", "Solana", "Distributed Systems", "WebSockets", "Smart Contracts"],
        "links": {},
        "icon": "🌐"
      },
      {
        "id": 4,
        "title": "Compactification Strategy for Apache Iceberg",
        "subtitle": "Database Optimization",
        "description": "A self-project to optimize Apache Iceberg compaction using a Rust-based algorithm[cite: 9].",
        "accomplishments": [
          "Built a Rust-based optimization algorithm that improved partition selection and reduced runtimes by 35%[cite: 9].",
          "Designed a comprehensive scoring model with file size penalties and delete ratios[cite: 9].",
          "Implemented caching strategies for partition metadata, cutting algorithm execution time from 2.5 hours to 45 minutes[cite: 9]."
        ],
        "skills": ["Rust", "Database Optimization", "Algorithms", "Greedy Methods", "Caching"],
        "links": {},
        "icon": "🗜️"
      },
      {
        "id": 5,
        "title": "Multi-Threaded Proxy Server with Caching",
        "subtitle": "Systems Programming",
        "description": "A self-project to build a multi-threaded HTTP proxy server in C that efficiently handles concurrent clients[cite: 10].",
        "accomplishments": [
          "Built a multi-threaded HTTP proxy server in C handling up to 120 concurrent clients using POSIX threads and semaphores[cite: 10].",
          "Integrated a custom LRU cache from scratch in C, reducing average page load latency by 45%[cite: 10].",
          "Achieved 100% thread-safe cache access using fine-grained per-object locking[cite: 11]."
        ],
        "skills": ["C", "Multi-threading", "Systems Programming", "POSIX Threads", "Caching", "LRU Cache"],
        "links": {},
        "icon": "🔄"
      }
    ]
  ;

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