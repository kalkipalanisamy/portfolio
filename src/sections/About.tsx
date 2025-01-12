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
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D3A2A]">
              Hello!
            </h2>
            <p className="text-xs md:text-lg lg:text-md font-regular text-[#4A6741] leading-6 md:leading-10 lg:leading-8 text-justify">
              I’m Kalki, a product management professional with a passion for
              solving complex problems and delivering meaningful results. My
              career spans from running a luxury interior design business—where
              I wore every hat imaginable—to managing cross-functional teams in
              tech and crafting strategies that drive impact. With an MBA in
              business analytics and a foundation in design, I bring a unique
              mix of strategy, empathy, analytical thinking, and entrepreneurial
              grit to the table. Whether scaling a business during the pandemic
              or leading innovative projects, I’ve learned how to adapt, lead,
              and deliver, no matter the challenge. If there’s one thing I excel
              at, it’s turning vision into action—and doing it with purpose.
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              src={Kalki}
              alt="Kalki Palanisamy"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
