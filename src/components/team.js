import React from 'react';
import Image from 'next/image';

const TeamMember = ({ name, description, role, links }) => (
  <div className="bg-neutral-900/50 p-8 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 rounded-full bg-neutral-800 p-1 mb-6">
        <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-900">
          <Image
            src={`/team/${name.toLowerCase().replace(' ', '-')}.jpg`}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-neutral-400 font-medium mb-4">{role}</p>
      <p className="text-neutral-500 text-center mb-6 leading-relaxed">{description}</p>
      
      <div className="flex gap-6 mb-6">
        {links.linkedin && (
          <a 
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        )}
        {links.github && (
          <a 
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
        {links.portfolio && (
          <a 
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </a>
        )}
      </div>
      {links.resume && (
        <a 
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-300"
        >
          View Resume
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Tanish Khot",
      role: "ML Engineer",
      description: "Pursuing Data Science at IIT Madras. Experienced with deep learning frameworks (TensorFlow, Keras), leading software projects with focus on model deployment.",
      links: {
        linkedin: "https://www.linkedin.com/in/tanishkhot/",
        github: "https://github.com/tanishkhot ",
        portfolio: "https://tanishkhot.in",
        resume: "/team/Tanish_Khot_Resume.pdf"
      }
    },
    {
      name: "Gaurav Waghmare",
      role: "GenAI + FullStack Developer",
      description: "Working on domain-specific GenAI tools for healthcare. Passionate about RAG and low-resource training techniques.",
      links: {
        linkedin: "https://www.linkedin.com/in/gaurav-waghmare-b9a656258/",
        github: "https://github.com/gauravw66",
        portfolio: "https://gauravw66.vercel.app/",
        resume: "/team/Gaurav_Waghmare_Resume.pdf"
      }
    },
    {
      name: "Aryan Chavan",
      role: "Systems Engineer",
      description: "Keen interest in applied ML and systems research. Experience in building recommendation engines and security solutions.",
      links: {
        linkedin: "https://www.linkedin.com/in/aryan-chavan-8522bb264/",
        github: "https://github.com/aryan181004",
        portfolio: "https://aryan-chavan.onrender.com/",
        resume: "/team/Aryan_Chavan_Resume.pdf"
      }
    },
    {
      name: "Devashish Bhirdi",
      role: "Full Stack Developer",
      description: "Frontend engineer with formal training in data science and ML. Focused on ML model interpretability.",
      links: {
        linkedin: "https://www.linkedin.com/in/devashish-bhirdi-53835529a/",
        github: "https://github.com/devashish-bhirdi",
        portfolio: "https://devashish24portfolio.vercel.app/",
        resume: "/team/Devashish_Resume.pdf"
      }
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Our Team
        </h2>
        <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto text-lg">
          A group of passionate engineers combining expertise in ML, AI, and software development
          to create innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
