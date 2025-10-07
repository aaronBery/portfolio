import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { email: contactEmail, socialLinks, location } = useApp();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex items-center justify-center gap-3">
          <Mail className="text-teal-600 dark:text-teal-400" />
          <span>Contact</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Interested in working together or have a question? Feel free to reach out via email or connect with me below.
        </p>

        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Contact Information</h3>
            
            <div className="space-y-4">
              <p className="flex items-start text-gray-700 dark:text-gray-300">
                <Mail className="mr-3 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" size={18} />
                <span>{contactEmail}</span>
              </p>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0A66C2] text-white rounded-full hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#24292e] text-white rounded-full hover:opacity-90 transition-opacity"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              {/* <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Available from 1st August (earlier is possible)
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;