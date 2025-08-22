import { Button } from "@/components/ui/button";
import professionalPortrait from "@/assets/professional-portrait.jpg";
import { useState } from 'react';

const HeroJourney = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const journeyItems = [
    {
      title: "Researcher/Developer at Eterna Labs",
      subtitle: "Low Level Engineering", 
      description: "Working on low latency backends along side professionals from MIT and Yale for On-Chain and Off Chain data feeds on hyperliquid Validators , Low level option pricing algorithms , Scalabale Cloud solutions for the same ",
      year: "August 2025 - Present",
      icon: "💻"
    },
    {
      title: "Medshield AI - Software Developer Intern",
      subtitle: "Working at a London based Startup", 
      description: "Developed comprehensive web scraping pipelines and integrated LLM scripts for seamless data flow. Engineered automated systems that bridge theoretical knowledge with real-world applications in healthcare technology.",
      year: "Nov 2024 to Jan 2025",
      icon: "💻"
    },
    {
      title: "DeFi for Digitalization of RWA | SwapSo.io",
      subtitle: "The Entrepreneurial Spark",
      description: "Led product design and architecture for real-world asset tokenization platform. Conducted deep research into tokenomics and liquidity maintenance, demonstrating leadership in emerging blockchain technologies.",
      year: "2024-2025",
      icon: "🚀"
    },
    {
      title: "Game theory in crypto and Markov Chains",
      subtitle: "Personal research interests alongside regular academic",
      description: "Mechanisms around Auctions , bandwidth distribution , complex decisions caught my eye.",
      year: "2024-present",
      icon: "🚀"
    },
    {
      title: "Self driving Car: Intro to systems ",
      subtitle: "Behavorial planning Engineer at SeDriCa",
      description: "Worked as a Systems Engineer on modelling Finite State Machines , Handling Concurrency and Parallel execution . Represented India internationally at robotics world cup at Brazil in 2024",
      year: "2023 - 2024",
      icon: "🎓"
    },
    {
      title: "IIT Bombay - A Journey in Mathematics",
      subtitle: "The Foundation",
      description: "Pursuing excellence in mathematics at one of India's premier institutions. Building strong analytical foundations that ground my problem-solving abilities and drive innovation through rigorous mathematical thinking.",
      year: "2023 - Present",
      icon: "🎓"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Side - Hero Introduction */}
          <div className="space-y-8 w-full lg:w-auto">
            {/* Professional Portrait */}
            <div className="flex justify-center lg:justify-start animate-fade-in mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-xl opacity-20 animate-float"></div>
                <img
                  src={professionalPortrait}
                  alt="Professional portrait"
                  className="relative w-48 h-60 lg:w-64 lg:h-80 object-cover rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 hover:scale-105"
                />
              </div>
            </div> 

            {/* Hero Content */}
            <div className="space-y-6 animate-slide-up text-center lg:text-left">
              {/* Name */}
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-off-white leading-tight">
                Aniruddh Sharma
              </h1>
              

              {/* Headline */}
              <h2 className="text-lg lg:text-xl font-semibold text-gold">
                Mathematics ,Technology ,Innovation
              </h2>

              {/* Sub-headline */}
              <p className="text-base lg:text-lg text-gray-subtle leading-relaxed">
                IIT Bombay pre-final year in Mathematics. Systems Engineer. Aspiring Founder.
                <br />
                Crafting innovative solutions through technology and mathematical foundations across Cloud, Distributed backends and Crypto.
              </p>
              <p>Hit me up if you are interested in Crypto , Game Theory or Markov Chains</p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="group"
                >
                  View My Projects
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                
                <Button 
                  variant="elegantOutline" 
                  size="lg"
                  onClick={() => scrollToSection('skills')}
                  className="group"
                >
                  Resources to Learn and skillUp
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Journey Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-off-white mb-8 text-center lg:text-left">
              My Journey So Far
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Column */}
              <div className="space-y-6">
                {journeyItems.slice(0, 3).map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gold/50 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-2xl transition-transform ${hoveredCard === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-off-white">{item.title}</h3>
                        <p className="text-gold text-sm mb-2">{item.year}</p>
                        <p className="text-gold/80 text-sm font-medium mb-2">{item.subtitle}</p>
                        <div className="relative overflow-hidden">
                          <div className={`text-gray-300 text-sm transition-all duration-300 ${hoveredCard === index ? 'max-h-96' : 'max-h-0 opacity-0'}`}>
                            <p className="pt-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Second Column */}
              <div className="space-y-6">
                {journeyItems.slice(3).map((item, index) => {
                  const actualIndex = index + 3;
                  return (
                    <div 
                      key={actualIndex}
                      className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gold/50 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredCard(actualIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`text-2xl transition-transform ${hoveredCard === actualIndex ? 'scale-110' : 'group-hover:scale-110'}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-off-white">{item.title}</h3>
                          <p className="text-gold text-sm mb-2">{item.year}</p>
                          <p className="text-gold/80 text-sm font-medium mb-2">{item.subtitle}</p>
                          <div className="relative overflow-hidden">
                            <div className={`text-gray-300 text-sm transition-all duration-300 ${hoveredCard === actualIndex ? 'max-h-96' : 'max-h-0 opacity-0'}`}>
                              <p className="pt-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJourney;