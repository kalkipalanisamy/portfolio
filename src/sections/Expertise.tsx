import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import sqlIcon from '../assets/icons/sql.svg'
import tableauIcon from '../assets/icons/tableau.svg'
import powerBiIcon from '../assets/icons/power-bi.svg'
import lookerIcon from '../assets/icons/looker.svg'
import jiraIcon from '../assets/icons/jira.svg'
import notionIcon from '../assets/icons/notion.svg'
import trelloIcon from '../assets/icons/trello.svg'
import googleAnalyticsIcon from '../assets/icons/google-analytics.svg'
import asanaIcon from '../assets/icons/asana.svg'
import miroIcon from '../assets/icons/miro.svg'
import Resume from '../assets/Kalki_Palanisamy_Resume.pdf'

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  period?: string;
  link?: string;
}

const expertise: ListItem[] = [
  { id: "01", title: "Product Strategy" },
  { id: "02", title: "Roadmap Development" },
  { id: "03", title: "Go-To-Market Strategy" },
  { id: "04", title: "Stakeholder Management" },
  { id: "05", title: "Data Analysis" },
  { id: "06", title: "Market Analysis" },
  { id: "07", title: "Cross-Functional Team Leadership" },
  { id: "08", title: "User-Centric Design" },
  { id: "09", title: "A/B Testing" },
  { id: "10", title: "Agile Methodologies" }
];

const tools: ListItem[] = [
  { id: "01", title: "SQL", icon: sqlIcon },
  { id: "02", title: "Tableau", icon: tableauIcon },
  { id: "03", title: "Power BI", icon: powerBiIcon },
  { id: "04", title: "Looker", icon: lookerIcon },
  { id: "05", title: "Jira", icon: jiraIcon },
  { id: "06", title: "Notion", icon: notionIcon },
  { id: "07", title: "Trello", icon: trelloIcon },
  { id: "08", title: "Google Analytics", icon: googleAnalyticsIcon },
  { id: "09", title: "Asana", icon: asanaIcon },
  { id: "10", title: "Miro", icon: miroIcon }
];

const personalInterests: ListItem[] = [
  { id: "01", title: "Rock Climbing", link: "#" },
  { id: "02", title: "Traveling", link: "#" },
  { id: "03", title: "Skiing", link: "#" },
  { id: "04", title: "Interior Design", link: "#" }
];

export default function Expertise() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section
        id="expertise"
        className="min-h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-8 py-20 lg:pt-40 bg-[#F5F5F0]"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 md:mb-16 lg:mb-14 text-[#2D3A2A] text-center">
            What I Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-4">
            {/* Expertise Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-light mb-2 text-[#2D3A2A] flex items-center justify-center">
                Expertise
              </h2>
              <hr className="border-[#4A6741]/20 mb-8"/>
              <div className="space-y-6 ">
                {expertise.map((item) => (
                  <motion.div
                    key={item.id}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-[#4A6741]/60">{item.id}</span>
                      <h3 className="text-md md:text-sm lg:text-md font-regular text-[#2D3A2A] group-hover:text-[#4A6741] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-light mb-2 text-[#2D3A2A] flex items-center justify-center">
                Tools
              </h2>
              <hr className="border-[#4A6741]/20 mb-8"/>
              <div className="space-y-6">
                {tools.map((item) => (
                  <motion.div
                    key={item.id}
                    className="group cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center space-x-4">
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-6 h-6"
                        />
                      )}
                      <h3 className="text-md md:text-sm lg:text-md font-regular text-[#2D3A2A] group-hover:text-[#4A6741] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests Section */}
            <motion.div
              className="bg-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-light mb-2 text-[#2D3A2A] flex items-center justify-center">
                Interests
              </h2>
              <hr className="border-[#4A6741]/20 mb-8"/>
              <div className="space-y-6">
                {personalInterests.map((item) => (
                  <motion.div
                    key={item.id}
                    className="group cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-[#4A6741]/60">
                          {item.id}
                        </span>
                        <h3 className="text-md md:text-sm lg:text-md font-regular text-[#2D3A2A] group-hover:text-[#4A6741] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </div>
            <motion.div 
                className="mt-16 flex items-center justify-center h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => setIsResumeOpen(true)}
                  className="group bg-white hover:bg-[#4A6741] rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-1 text-[#4A6741] group-hover:text-white transition-colors cursor-pointer">
                    <span className="font-regular text-sm pt-2 cursor-pointer">VIEW RESUME</span>
                    <svg 
                      className="w-6 h-6 mt-1 transform group-hover:translate-x-1 transition-transform cursor-pointer" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      style={{ transform: 'rotate(-45deg)' }}
                    >
                      <path d="M5 12h17M15 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              </motion.div>
          
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          >
            <div className="absolute inset-20 md:inset-24 bg-white rounded-2xl shadow-xl flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#4A6741]/20">
                <h3 className="text-xl font-light text-[#2D3A2A]">Resume</h3>
                <motion.button
                  onClick={() => setIsResumeOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#4A6741] hover:bg-[#4A6741]/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg 
                    className="w-6 h-6" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 p-4">
                <iframe
                  src={`${Resume}#view=FitH`}
                  className="w-full h-full rounded-lg"
                  title="Resume PDF"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#4A6741]/20 flex justify-end cursor-pointer">
                <motion.a
                  href={Resume}
                  download
                  className="bg-[#4A6741] text-white px-6 py-2 rounded-full hover:bg-[#2D3A2A] transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-regular text-sm pt-2 cursor-pointer">Download PDF</span>
                  <svg 
                    className="w-5 h-5 cursor-pointer" 
                    viewBox="0 0 16 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
