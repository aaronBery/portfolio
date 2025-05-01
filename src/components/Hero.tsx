import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { name, role, email, socialLinks } = useApp();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      ref={heroRef}
      className="min-h-screen pt-20 flex flex-col justify-center opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-600 dark:text-teal-400 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {name}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-6">
            {role}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I specialize in building exceptional digital experiences with a focus on React, Angular, and modern front-end technologies. 
            With extensive experience leading engineering teams and architecting complex web applications, I bring a strategic approach to software development.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors duration-300 shadow-md"
            >
              Get in touch
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-medium rounded-md hover:bg-teal-600/10 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToExperience();
              }}
            >
              View my work
            </a>
          </div>

          <div className="flex gap-4">
            <a 
              href={socialLinks.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <button 
            onClick={scrollToExperience}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-teal-500 hover:text-teal-500 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;