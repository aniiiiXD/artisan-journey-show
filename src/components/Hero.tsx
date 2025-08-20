import { Button } from "@/components/ui/button";
import professionalPortrait from "@/assets/professional-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Professional Portrait */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-xl opacity-20 animate-float"></div>
              <img
                src={professionalPortrait}
                alt="Professional portrait"
                className="relative w-80 h-96 lg:w-96 lg:h-[28rem] object-cover rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 animate-slide-up text-center lg:text-left">
            {/* Name */}
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-off-white leading-tight">
              Your Name
            </h1>

            {/* Headline */}
            <h2 className="text-xl lg:text-2xl font-semibold text-gold">
              Building the Future at the Intersection of Mathematics and Technology
            </h2>

            {/* Sub-headline */}
            <p className="text-lg lg:text-xl text-gray-subtle leading-relaxed max-w-2xl">
              IIT Bombay Student. Systems Engineer. Aspiring Founder.
              <br />
              Crafting innovative solutions through rigorous mathematical foundations and cutting-edge technology.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="xl"
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
                size="xl"
                onClick={() => scrollToSection('journey')}
                className="group"
              >
                Read My Story
                <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;