import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              when: "afterChildren"
            }
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#F5F5F0]"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-logo text-[#2D3A2A] mb-8"
            >
              Kalki Palanisamy
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ 
                width: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-[#4A6741]/30 w-full max-w-[300px] mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}