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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {journeyItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl shadow-gold lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`ml-8 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-subtle hover:shadow-elegant transition-all duration-500 elegant-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                        {item.subtitle}
                      </span>
                      <span className="text-gray-subtle text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-semibold text-off-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-subtle leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;