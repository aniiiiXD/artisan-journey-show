const Journey = () => {
  const journeyItems = [
    {
      title: "IIT Bombay - A Journey in Mathematics",
      subtitle: "The Foundation",
      description: "Pursuing excellence in mathematics at one of India's premier institutions. Building strong analytical foundations that ground my problem-solving abilities and drive innovation through rigorous mathematical thinking.",
      year: "2023 - Present",
      icon: "🎓"
    },
    {
      title: "Medshield AI - Software Developer Intern",
      subtitle: "The Practical Leap", 
      description: "Developed comprehensive web scraping pipelines and integrated LLM scripts for seamless data flow. Engineered automated systems that bridge theoretical knowledge with real-world applications in healthcare technology.",
      year: "2024",
      icon: "💻"
    },
    {
      title: "DeFi for Digitalization of RWA | SwapSo.io",
      subtitle: "The Entrepreneurial Spark",
      description: "Led product design and architecture for real-world asset tokenization platform. Conducted deep research into tokenomics and liquidity maintenance, demonstrating leadership in emerging blockchain technologies.",
      year: "2024",
      icon: "🚀"
    }
  ];

  return (
    <section id="journey" className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-off-white mb-6">
            My Journey
          </h2>
          <p className="text-xl text-gray-subtle max-w-3xl mx-auto">
            A timeline of growth, learning, and innovation across academia, industry, and entrepreneurship.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line - Horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold/50 to-gold transform -translate-y-1/2 hidden lg:block"></div>
          
          {/* Mobile Timeline Line - Vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent lg:hidden"></div>

          {/* Timeline Items - Horizontal Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-0">
            {journeyItems.map((item, index) => (
              <div 
                key={index} 
                className="relative animate-slide-up lg:flex lg:flex-col lg:items-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl shadow-gold mb-6 lg:mb-8 z-10 relative">
                  {item.icon}
                  {/* Mobile connector line */}
                  <div className="absolute -left-8 top-1/2 w-8 h-0.5 bg-gold transform -translate-y-1/2 lg:hidden"></div>
                </div>

                {/* Content Card */}
                <div className="ml-8 lg:ml-0 lg:max-w-sm">
                  <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-subtle hover:shadow-elegant transition-all duration-500 elegant-hover border border-gold/10 hover:border-gold/30">
                    <div className="text-center lg:text-center mb-4">
                      <span className="text-gold font-semibold text-xs lg:text-sm tracking-wide uppercase block mb-2">
                        {item.subtitle}
                      </span>
                      <span className="text-gray-subtle text-xs lg:text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-off-white mb-4 leading-tight text-center lg:text-center">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-subtle leading-relaxed text-sm lg:text-base text-center lg:text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Dots for Desktop */}
          <div className="hidden lg:flex justify-center items-center mt-12 space-x-4">
            {journeyItems.map((_, index) => (
              <div 
                key={index}
                className="w-3 h-3 rounded-full bg-gold/30 animate-pulse"
                style={{ animationDelay: `${index * 300}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;