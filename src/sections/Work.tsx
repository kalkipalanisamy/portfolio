import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
];

export default function Work() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInitialAnimation, setIsInitialAnimation] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1.1, 0.9]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    // Switch to subtle animation after 5 seconds
    const timeout = setTimeout(() => {
      setIsInitialAnimation(false);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main id="work" className="min-h-screen bg-white relative p-8" ref={containerRef}>
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 h-[700px] md:h-[850px] lg:h-[750px] w-full cursor-pointer overflow-hidden rounded-2xl lg:pb-40"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => window.open('https://hausofkalki.github.io/', '_blank')}
      >
        {/* Background Images with Fade Animation */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.05 : 1,
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 0.6 }
            }}
          >
            <img 
              src={image} 
              alt={`Haus of Kalki ${index + 1}`} 
              className="w-full h-full object-cover rounded-2xl cursor-pointer"
            />
          </motion.div>
        ))}
          
        {/* Click Indicator with initial prominence */}
        <motion.div
          className="absolute top-3/4 right-44 md:left-48 flex items-center justify-center pointer-events-none lg:hidden z-[70]"
          animate={{ 
            opacity: isInitialAnimation ? 0.8 : 0.4
          }}
          transition={{
            duration: 0.3
          }}
        >
          <div className="relative w-7 h-7">
            {/* Animated ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-white"
              animate={{
                scale: isInitialAnimation ? [1, 2] : [1, 2],
                opacity: isInitialAnimation ? [1, 0] : [0.7, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            {/* Main dot */}
            <div className="absolute inset-0 rounded-full border-2 border-white" />
          </div>
        </motion.div>

        {/* Overlay - Always visible */}
        <motion.div 
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center rounded-2xl cursor-pointer"
          animate={{ 
            backgroundColor: isHovered ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.5)"
          }}
        >
          <motion.div className="text-center">
            <div className="flex items-center justify-center gap-0 md:gap-2 lg:gap-2">
            <motion.span
                animate={{
                  x: isHovered ? -20 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
              <span className="ml-16 md:ml-28 lg:ml-24 text-white text-3xl md:text-6xl lg:text-8xl font-regular tracking-wider cursor-pointer">
                  Haus of Kalki
                </span>
              </motion.span>
              <motion.span
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                  y: isHovered ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-2 mr-2 transform group-hover:translate-x-1 transition-transform cursor-pointer" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1"
                  style={{ transform: 'rotate(-45deg)' }}
                >
                  <path d="M5 12h17M15 5l7 7-7 7" />
                </svg>
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}