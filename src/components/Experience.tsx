import React, { useRef, useEffect } from 'react';
import { experiences } from '../data/experience';
import { Briefcase as BriefcaseBusiness } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    timelineItemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineItemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <BriefcaseBusiness className="text-teal-600 dark:text-teal-400" />
          <span>Work Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-teal-600/30 dark:bg-teal-400/30 transform -translate-x-1/2 z-0"></div>

          {/* Timeline entries */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${index}`}
                ref={el => timelineItemRefs.current[index] = el}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 opacity-0 transition-opacity duration-1000 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date and Company - Left or Right based on index */}
                <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
                  <div className={`relative flex flex-col ${
                    index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'
                  }`}>
                    <span className="text-teal-600 dark:text-teal-400 text-lg font-semibold mb-2 pl-10 md:pl-0">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-1">{exp.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.location}</p>
                    
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-0 md:left-auto md:top-3 md:-right-12 md:transform md:translate-x-1/2 flex items-center justify-center w-8 h-8 bg-teal-600 dark:bg-teal-400 rounded-full z-10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Description - Right or Left based on index */}
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-600 dark:text-teal-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;