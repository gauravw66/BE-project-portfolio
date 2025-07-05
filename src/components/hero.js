"use client"

import React, { useState } from 'react';

const Hero = () => {
  const [showCopied, setShowCopied] = useState(false);
  const contactInfo = {
    email: 'gbwaghmare66@gmail.com',
    phone: '+91 84849 87616'
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <span className="text-neutral-400 font-semibold mb-4 animate-fade-in">
          Final Year Project 2025-26
        </span>
        
        <h1 className="text-2xl md:text-7xl font-bold mb-6">
          Engineering Tomorrow's Solutions
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed">
            A dynamic team of final-year B.E. students from Pune Institute of Computer Technology, 
            seeking collaboration opportunities to drive innovation in technology. Our diverse skill set 
            spans across machine learning, software development, and systems engineering.
          </p>
          
          <p className="text-lg mb-8 text-gray-400 leading-relaxed">
            We're passionate about building scalable solutions that solve real-world problems, 
            with experience in healthcare applications, recommendation systems, and efficient model deployment.
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
            <div className="relative group">
              <button 
                onClick={handleCopyEmail}
                className="px-8 py-3 w-64 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {showCopied ? 'Copied!' : 'Copy Email'}
              </button>
              {/* <a
                href={`mailto:${contactInfo.email}`}
                className="absolute -bottom-12 left-9 w-48 px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {contactInfo.email}
              </a> */}
            </div>
            
            <a 
              href={`tel:${contactInfo.phone}`}
              className="px-8 mt-10 md:mt-0 py-3 w-64 rounded-lg border border-neutral-800 text-white font-semibold hover:bg-neutral-900 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contactInfo.phone}
            </a>
          </div>
          
          <div className="mt-16 flex flex-col items-center">
            <p className="text-gray-400 mb-4">Areas of Expertise</p>
            <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
              {[
                'Machine Learning',
                'Healthcare Tech',
                'System Design',
                'Full Stack Development',
                'Model Optimization',
                'Data Science',
                'Cloud Computing',
                'GenAI Applications'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors delay-75 text-sm text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;