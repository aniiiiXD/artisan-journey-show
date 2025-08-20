const Skills = () => {
  const technicalSkills = [
    { category: "Languages", skills: [
      { name: "C/C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript/TypeScript", level: 80 },
      { name: "Rust", level: 75 },
      { name: "Solidity", level: 70 }
    ]},
    { category: "Development", skills: [
      { name: "Full-Stack Development", level: 85 },
      { name: "System Architecture", level: 80 },
      { name: "Algorithm Design", level: 90 },
      { name: "Database Systems", level: 75 },
      { name: "Cloud Infrastructure", level: 70 }
    ]},
    { category: "Data Science", skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Data Engineering", level: 75 },
      { name: "Statistical Analysis", level: 85 },
      { name: "LLM Integration", level: 70 },
      { name: "Graph Theory", level: 90 }
    ]}
  ];

  const achievements = [
    "JEE Advanced: Top 2% (99.8 percentile)",
    "JEE Mains: Top 1% (99.9 percentile)", 
    "Mathematics Olympiad: State Level Winner",
    "Coding Contest: Multiple top 10 finishes"
  ];

  const hackathons = [
    "Smart India Hackathon 2024 - Finalist",
    "IIT Bombay TechFest Hackathon - Winner", 
    "Blockchain Innovation Challenge - 2nd Place",
    "AI for Healthcare Hackathon - Top 5"
  ];

  const responsibilities = [
    "Events Coordinator - Techfest, IIT Bombay",
    "Technical Lead - Coding Club, IIT Bombay",
    "Mentor - First Year Students Program",
    "Volunteer - Social Innovation Cell"
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-off-white mb-6">
            Skills & Recognition  
          </h2>
          <p className="text-xl text-gray-subtle max-w-3xl mx-auto">
            A comprehensive overview of technical expertise, academic achievements, and leadership experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Technical Skills */}
          <div className="space-y-12 animate-slide-up">
            <div>
              <h3 className="font-display text-2xl font-semibold text-off-white mb-8">
                Technical Expertise
              </h3>
              
              {technicalSkills.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h4 className="text-gold font-semibold text-lg mb-4 uppercase tracking-wide">
                    {category.category}
                  </h4>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-off-white font-medium">{skill.name}</span>
                          <span className="text-gray-subtle text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-charcoal-light rounded-full h-2 overflow-hidden">
                          <div 
                            className="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-off-white mb-6">
                Academic Achievements
              </h3>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <span className="text-gold mt-1 group-hover:scale-125 transition-transform">🏆</span>
                    <span className="text-gray-subtle group-hover:text-off-white transition-colors">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hackathons & Leadership */}
          <div className="space-y-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="font-display text-2xl font-semibold text-off-white mb-6">
                Hackathons & Competitions
              </h3>
              
              <div className="space-y-4">
                {hackathons.map((hackathon, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 shadow-subtle hover:shadow-elegant transition-all duration-300 elegant-hover border border-gold/10 hover:border-gold/30">
                    <div className="flex items-start gap-3">
                      <span className="text-gold text-xl">🚀</span>
                      <span className="text-off-white font-medium">{hackathon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-off-white mb-6">
                Leadership & Responsibility
              </h3>
              
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 shadow-subtle hover:shadow-elegant transition-all duration-300 elegant-hover border border-gold/10 hover:border-gold/30">
                    <div className="flex items-start gap-3">
                      <span className="text-gold text-xl">👥</span>
                      <span className="text-off-white font-medium">{responsibility}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-charcoal rounded-2xl p-8 border border-gold/20 shadow-elegant">
              <h4 className="font-display text-xl font-semibold text-off-white mb-4">
                Ready to Collaborate?
              </h4>
              <p className="text-gray-subtle mb-6">
                Let's discuss how we can build innovative solutions together.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;