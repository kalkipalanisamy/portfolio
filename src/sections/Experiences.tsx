import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../types';
import { useState, useEffect } from 'react';

const experiences: Experience[] = [
  {
    company: "Ramp-Up SeattleU",
    role: "Client Account Manager",
    period: "09/2023 - Present",
    current: true,
    tags: ["Product Management", "Market Research", "Data Analysis"],
    achievements: [
      "Identified and prioritized product initiatives through collaboration with business stakeholders, resulting in a 20% increase in client revenue.",
      "Developed and managed a product backlog, ensuring alignment with business objectives and delivering high-value features on time.",
      "Conducted market research and data analysis to inform product decisions, improving client acquisition rates by 25%.",
      "Presented actionable insights and product roadmaps to cross-functional teams, accelerating decision-making processes by 30%.",
    ]
  },
  {
    company: "Haus of Kalki",
    role: "Founder and Principal Designer",
    period: "04/2021 - Present",
    current: true,
    tags: ["Entrepreneurship", "Interior Design", "Product Marketing"],
    achievements: [
      "Managed end-to-end product lifecycle for bespoke interior design solutions, delivering projects with a 20% reduction in lead times",
      "Led data-driven marketing campaigns, increasing brand visibility by 30% and driving a 25% rise in repeat business",
      "Spearheaded customer-centric product enhancements, resulting in a 25% improvement in client satisfaction",
      "Optimized internal workflows using project management tools, enhancing cross-functional collaboration and resource allocation"
    ]
  },
  {
    company: "Mistral Solutions",
    role: "Product Management Intern",
    period: "05/2021 - 04/2022",
    current: false,
    tags: ["Stakeholder Management", "Collaborative Leadership"],
    achievements: [
      "Collaborated with stakeholders to define product requirements, creating user stories and acceptance criteria that reduced time-to-market by 15%",
      "Conducted A/B testing and analyzed product performance, contributing to $2M in additional revenue",
      "Designed product roadmaps that aligned with strategic goals, improving feature delivery rates by 25%",
      "Partnered with engineering and UX teams to ensure seamless implementation of new features, enhancing user experience"
    ]
  },
  {
    company: "Anusha Shetty Designs",
    role: "Business Development Associate and Designer",
    period: "06/2019 - 04/2021",
    current: false,
    tags: ["Competitive Analysis", "Lead Generation", "GTM Strategy"],
    achievements: [
      "Conducted user research and competitive analysis to inform product development, driving a 25% increase in client acquisition",
      "Developed go-to-market strategies for luxury design services, resulting in a 30% boost in brand visibility",
      "Improved product positioning through targeted marketing efforts, securing $300K+ in project contracts",
      "Analyzed customer feedback to optimize offerings, enhancing adoption rates and increasing referrals by 15%"
    ]
  },
  {
    company: "Milofy by FutureOn Systems",
    role: "Business Marketing Intern",
    period: "06/2016 - 12/2016",
    current: false,
    tags: ["Product Marketing", "Digital Marketing"],
    achievements: [
      "Supported the development and launch of a social networking app, achieving a 30% increase in user sign-ups within the first three months",
      "Executed data-driven marketing campaigns, increasing active user engagement by 40% and facilitating over 300 user connections",
      "Conducted user behavior analysis, improving retention rates by 25% through targeted in-app features"
    ]
  }
];

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [marginSize, setMarginSize] = useState(getMarginSize());

  function getMarginSize() {
    if (typeof window === 'undefined') return 385; // Default for SSR
    if (window.innerWidth < 768) return 490;  // mobile
    if (window.innerWidth < 1024) return 365; // tablet
    return 285; // desktop
  }

  useEffect(() => {
    function handleResize() {
      setMarginSize(getMarginSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                marginBottom: expandedIndex === index ? `${marginSize}px` : '0px'
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
                      <span className="text-xs md:text-md lg:text-md text-[#4A6741]/60 font-number font-medium cursor-pointer">0{index + 1}</span>
                      <h3 className="text-sm md:text-lg lg:text-2xl font-light text-[#2D3A2A] group-hover:text-[#4A6741] transition-colors cursor-pointer">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="hidden md:flex lg:flex space-x-4">
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
                      <div className="p-2 pb-6 pl-12 space-y-4">
                        <div>
                          <span className="text-md text-[#4A6741] font-light">Role: </span>
                          <span className="text-[#2D3A2A] text-sm font-regular mt-1">{exp.role}</span>
                        </div>
                        <div>
                          <span className="text-md text-[#4A6741] font-light">Period: </span>
                          <span className="text-[#2D3A2A] text-sm font-regular mt-1">
                            {exp.period.split(/(\d+)/).map((part, index) => (
                              part.match(/\d+/) ? 
                              <span key={index} className="font-number font-medium">{part}</span> : 
                              <span key={index}>{part}</span>
                            ))}
                          </span>
                        </div>
                        <div>
                          <span className="text-md text-[#4A6741] font-light">Achievements: </span>
                          <ul className="mt-4 space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-[#2D3A2A] font-regular text-sm flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] mt-1 mr-2 flex-shrink-0" />
                                <span className="achievement-text">
                                  {achievement.split(/(\d+%?)/).map((part, index) => (
                                    part.match(/\d+%?/) ? 
                                    <span key={index} className="font-number font-medium">{part}</span> : 
                                    <span key={index}>{part}</span>
                                  ))}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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