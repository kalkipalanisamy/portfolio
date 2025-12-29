import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../types';
import { useState, useEffect } from 'react';

const experiences: Experience[] = [
  {
    company: "Ramp-Up SeattleU",
    role: "Client Account Manager",
    period: "09/2023 - Present",
    current: true,
    tags: ["Stakeholder Management", "Scope & Delivery Management", "Client-Facing Execution"],
    achievements: [
      "Directed end-to-end website development projects for small businesses, managing scope, timelines, and stakeholder expectations",
      "Partnered with business owners to define service requirements and content strategy, translating needs into executable project plans.",
      "Ensured branding, usability, and outreach objectives were met through risk management and quality control practices.",
      "Delivered scalable digital platforms that increased client customer engagement by an average of 30%."
    ],
    link: "https://www.seattleu.edu/business/about-albers/albers-leads-connects-serves/ramp-up/"
  },
  {
    company: "On Track Bike Rentals",
    role: "Project Manager",
    period: "04/2020 - 08/2023",
    current: false,
    tags: ["Cross-Functional Delivery", "Operational Systems Implementation", "Process & Risk Optimization"],
    achievements: [
      "Led cross-functional initiatives across rental logistics, fleet financing, and digital platforms, aligning app features, field operations, and service delivery to improve operational efficiency",
      "Partnered with product and engineering teams to optimize booking and tracking workflows, reducing customer friction and enabling real-time operational visibility.",
      "Implemented a digital asset tracking system that reduced vehicle misallocation and generated $200K+ in annual cost savings.",
      "Designed and deployed internal reporting dashboards to monitor loan repayments, rental revenue, and fleet utilization, improving financial transparency and leadership decision-making.",
      "Developed and operationalized a risk assessment framework for fleet and financing operations, reducing service disruptions and supporting consistent loan approvals.",
      "Introduced preventive maintenance planning and process improvements that reduced vehicle downtime by 30% and improved customer satisfaction."
    ],
    link: "https://on-track.in/"
  },
  {
    company: "Mistral Solutions",
    role: "Project Controller",
    period: "05/2018 - 04/2020",
    current: false,
    tags: ["Project Controls & Governance", "Financial & Resource Management", "Executive Reporting & Visibility"],
    achievements: [
      "Supported delivery of 8 concurrent technology and embedded systems projects, managing resource allocation schedules and project performance reporting.",
      "Built real-time project tracking tools that reduced reporting errors by 40% and enabled earlier identification and escalation of delivery risks.",
      "Partnered with engineering and finance teams to conduct financial risk assessments and establish contingency reserves.",
      "Managed budgeting and cost control for IoT and embedded systems initiatives, maintaining consistent adherence to approved forecasts.",
      "Supported governance reviews and milestone tracking across multiple programs.",
      "Produced executive-ready dashboards & stakeholder updates that improved project transparency and accelerated decision-making."
    ],
    link: "https://mistralsolutions.com/"
  }
  // {
  //   company: "Haus of Kalki",
  //   role: "Founder and Principal Designer",
  //   period: "04/2021 - Present",
  //   current: true,
  //   tags: ["Entrepreneurship", "Interior Design", "Product Marketing"],
  //   achievements: [
  //     "Managed end-to-end product lifecycle for bespoke interior design solutions, delivering projects with a 20% reduction in lead times",
  //     "Led data-driven marketing campaigns, increasing brand visibility by 30% and driving a 25% rise in repeat business",
  //     "Spearheaded customer-centric product enhancements, resulting in a 25% improvement in client satisfaction",
  //     "Optimized internal workflows using project management tools, enhancing cross-functional collaboration and resource allocation"
  //   ]
  // },
  // {
  //   company: "Anusha Shetty Designs",
  //   role: "Business Development Associate and Designer",
  //   period: "06/2019 - 04/2021",
  //   current: false,
  //   tags: ["Competitive Analysis", "Lead Generation", "GTM Strategy"],
  //   achievements: [
  //     "Conducted user research and competitive analysis to inform product development, driving a 25% increase in client acquisition",
  //     "Developed go-to-market strategies for luxury design services, resulting in a 30% boost in brand visibility",
  //     "Improved product positioning through targeted marketing efforts, securing $300K+ in project contracts",
  //     "Analyzed customer feedback to optimize offerings, enhancing adoption rates and increasing referrals by 15%"
  //   ]
  // }
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
    <section id="experience" className="min-h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-16 py-20 pb-40 md:pb-48 lg:pb-36 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl pt-20 md:pt-16 lg:pt-10 flex justify-center font-light mb-12 md:mb-16 lg:mb-8 text-[#2D3A2A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="relative space-y-6">
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
                      <h3 className="text-sm md:text-[16px] lg:text-2xl font-light text-[#2D3A2A] group-hover:text-[#4A6741] transition-colors cursor-pointer">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="hidden md:flex lg:flex space-x-4">
                        {exp.tags.map((tag, index) => (
                          <span key={index} className="font-light text-xs md:text-[8px] lg:text-[14px] text-[#4A6741]/80 cursor-pointer">
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
                      <motion.button
                        onClick={() => window.open(exp.link, '_blank')}
                        className="px-2 py-1 rounded-full border text-[#4A6741] font-light text-md hover:bg-[#4A6741] hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-4 h-6">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
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
                      <div className="p-2 pb-10 pl-12 pr-12 space-y-4">
                        {/* Role and Period - responsive layout */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-3 md:space-y-0">
                          <div>
                            <span className="text-[16px] text-[#4A6741] font-light">Role: </span>
                            <span className="text-[#2D3A2A] text-[16px] font-regular mt-1">{exp.role}</span>
                          </div>
                          <div>
                            <span className="text-[16px] text-[#4A6741] font-light">Period: </span>
                            <span className="text-[#2D3A2A] text-[16px] font-regular mt-1">
                              {exp.period.split(/(\d+)/).map((part, index) => (
                                part.match(/\d+/) ? 
                                <span key={index} className="font-number font-medium">{part}</span> : 
                                <span key={index}>{part}</span>
                              ))}
                            </span>
                          </div>
                        </div>
                        {/* Achievements header and Visit Site on the same line */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-3 md:space-y-0 mt-3">
                          <span className="text-[16px] text-[#4A6741] font-light">Achievements: </span>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-[#2D3A2A] font-regular text-[16px] flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] mt-2 mr-2 flex-shrink-0" />
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