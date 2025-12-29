import { motion } from "framer-motion";
import Kalki from "../assets/Kalki.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-16 py-20 md:py-0 pt-24 bg-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 pt-2 md:pt-16 lg:pt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#2D3A2A]">
              Hello!
            </h2>
            <p className="text-[13px] md:text-[16px] lg:text-[15px] font-regular text-[#4A6741] leading-6 md:leading-10 lg:leading-8 text-justify">
              I like being the person who brings clarity and calm when projects get complex.
              <br />
              <br />
              I’m Kalki, a project management professional who helps teams move from ambiguity 
              to execution. I work best on projects that start with big goals and unclear paths, 
              where progress depends on asking the right questions, setting direction, 
              and keeping momentum steady.
              <br />
              <br className="md:hidden lg:block"/>
              My work sits at the intersection of planning, delivery, and people. With an MBA in 
              Information Systems and a strong analytical foundation, I focus on building clear 
              plans, managing risk early, and creating visibility so teams can make better 
              decisions and move forward with confidence.
              <br />
              <br className="lg:block"/>
              At my core, I’m someone who follows through. I care about doing the work well, 
              leading with intention, and turning ideas into results that actually last.
            </p>
          </div>
          <div className="relative h-[250px] md:h-[450px] lg:h-[500px]">
            <img
              src={Kalki}
              alt="Kalki Palanisamy"
              className="w-full h-full object-cover md:y-50 rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
