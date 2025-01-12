import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8 lg:px-16 py-20 md:py-0 bg-white">
      <div className="max-w-7xl mx-auto w-full z-[1]">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-regular mb-6 md:mb-12 text-[#2D3A2A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Product Management
          <br className="hidden sm:block" />
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mb-8 md:mb-12 text-[#4A6741]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We transform spaces into immersive experiences, blending innovation
          with meticulous craftsmanship.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M12 5v14m0 0l-6-6m6 6l6-6"
            stroke="#4A6741"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
} 