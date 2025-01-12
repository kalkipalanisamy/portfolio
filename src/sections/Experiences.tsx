import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../types';
import { useState } from 'react';

const experiences: Experience[] = [
  {
    company: "Ramp-Up SeattleU",
    role: "Client Account Manager",
    period: "09/2023 - Present",
    current: true,
    tags: ["Product Management", "Market Research", "Data Analysis"],
    achievements: [
      "Launched 3 major features increasing user engagement by 45%",
      "Led a team of 8 designers and developers",
      "Implemented agile methodologies improving delivery time by 30%"
    ]
  },
  {
    company: "Haus of Kalki",
    role: "Founder and Principal Designer",
    period: "04/2021 - Present",
    current: true,
    tags: ["Entrepreneurship", "Interior Design", "Product Marketing"],
    achievements: [
      "Grew monthly active users by 200%",
      "Reduced churn rate by 25%",
      "Successfully launched mobile app with 4.8 star rating"
    ]
  },
  {
    company: "Mistral Solutions",
    role: "Product Management Intern",
    period: "05/2021 - 04/2022",
    current: false,
    tags: ["Stakeholder Management", "Collaborative Leadership"],
    achievements: [
      "Increased customer satisfaction score from 7.5 to 9.2",
      "Implemented user feedback loop reducing bug reports by 40%",
      "Collaborated with 5 cross-functional teams"
    ]
  },
  {
    company: "Anusha Shetty Designs",
    role: "Business Development Associate and Designer",
    period: "06/2019 - 04/2021",
    current: false,
    tags: ["Competitive Analysis", "Lead Generation", "GTM Strategy"],
    achievements: [
      "Increased customer satisfaction score from 7.5 to 9.2",
      "Implemented user feedback loop reducing bug reports by 40%",
      "Collaborated with 5 cross-functional teams"
    ]
  },
  {
    company: "Milofy by FutureOn Systems",
    role: "Business Marketing Intern",
    period: "06/2016 - 12/2016",
    current: false,
    tags: ["Product Marketing", "Digital Marketing"],
    achievements: [
      "Increased customer satisfaction score from 7.5 to 9.2",
      "Implemented user feedback loop reducing bug reports by 40%",
      "Collaborated with 5 cross-functional teams"
    ]
  }
];

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="min-h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-16 py-20 pb-40 md:pb-48 lg:pb-56 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl pt-20 md:pt-16 lg:pt-10 flex justify-center font-light mb-12 md:mb-16 lg:mb-8 text-[#2D3A2A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="relative space-y-2">
          {experiences.map((exp, index) => (
            <div key={index} 
              className={`relative border-b border-[#4A6741]/20 last:border-b-0 bg-white transition-all duration-300
                ${expandedIndex === index ? 'shadow-xl' : 'hover:shadow-xl'}`}
              style={{
                marginBottom: expandedIndex === index ? '400px' : '0px'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Main Row */}
                <div className="p-6">
                  <div 
                    className="py-2 flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleDetails(index)}
                  >
                    <div className="flex items-center space-x-4 cursor-pointer">
                      <span className="text-xs md:text-md lg:text-md text-[#4A6741]/60 font-regular cursor-pointer">0{index + 1}</span>
                      <h3 className="text-sm md:text-lg lg:text-2xl font-light text-[#2D3A2A] group-hover:text-[#4A6741] transition-colors cursor-pointer">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="hidden md:flex lg:flex space-x-4">
                        {/* Add your expertise tags here */}
                        {exp.tags.map((tag, index) => (
                          <span key={index} className="font-regular text-xs md:text-xs lg:text-md text-[#4A6741]/80 cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        className={`w-8 h-8 flex items-center justify-center rounded-full border border-[#4A6741]/20 cursor-pointer
                          ${expandedIndex === index ? 'bg-[#4A6741] text-white' : 'bg-transparent text-[#4A6741]'}`}
                        animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 0v14M0 7h14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Updated Dropdown Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 bg-white z-10 rounded-b-xl shadow-xl"
                    >
                      <div className="p-6 pl-12 space-y-4">
                        <div>
                          <span className="text-sm text-[#4A6741] font-light">Role</span>
                          <p className="text-[#2D3A2A] mt-1">{exp.role}</p>
                        </div>
                        <div>
                          <span className="text-sm text-[#4A6741] font-light">Period</span>
                          <p className="text-[#2D3A2A] mt-1">{exp.period}</p>
                        </div>
                        <div>
                          <span className="text-sm text-[#4A6741] font-light">Achievements</span>
                          <ul className="mt-2 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-[#2D3A2A] flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] mt-2 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-end"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}