import { Button } from "@/components/ui/button";
import professionalPortrait from "@/assets/professional-portrait.jpg";

const HeroJourney = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const journeyItems = [
    {
      title: "Researcher/Developer",
      subtitle: "Low Level Engineering", 
      description: "Working on low latency backends for On-Chain and Off Chain data feeds on hyperliquid Validators , Low level option pricing algorithms , Scalabale Cloud solutions for the same ",
      year: "August 2025 - Present",
      icon: "💻"
    },
    {
      title: "Medshield AI - Software Developer Intern",
      subtitle: "The Practical Leap", 
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
          <div className="space-y-8">
            {/* Professional Portrait */}
            <div className="flex justify-center lg:justify-start animate-fade-in mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-xl opacity-20 animate-float"></div>
                <img
                  src={professionalPortrait}
                  alt="Professional portrait"
                  className="relative w-64 h-80 lg:w-80 lg:h-96 object-cover rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 hover:scale-105"
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
            {/* Journey Header */}
            <div className="text-center lg:text-left animate-fade-in">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-off-white mb-4">
                My Journey
              </h2>
              <p className="text-lg text-gray-subtle">
                A timeline of growth, learning, and innovation across academia, industry, and entrepreneurship.
              </p>
            </div>

            {/* Vertical Timeline for Side Layout */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {journeyItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative flex items-start animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl shadow-gold z-10">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-elegant transition-all duration-500 elegant-hover border border-gold/10 hover:border-gold/30">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                            {item.subtitle}
                          </span>
                          <span className="text-gray-subtle text-sm font-medium">
                            {item.year}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-xl font-semibold text-off-white mb-3 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-subtle leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJourney;