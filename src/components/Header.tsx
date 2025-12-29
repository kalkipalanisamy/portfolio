"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Menu Button Component
// Menu and Close button combined into one component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute"
    animate={{
      opacity: isOpen ? 0 : 1,
      transitionEnd: {
        display: isOpen ? "none" : "block",
      },
    }}
    transition={{ duration: 0.2 }}
  >
    <path
      d="M3 5h12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 9h12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 13h12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </motion.svg>
);

const CloseIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute"
    animate={{
      opacity: isOpen ? 1 : 0,
      transitionEnd: {
        display: isOpen ? "block" : "none",
      },
    }}
    transition={{ duration: 0.2 }}
  >
    <path
      d="M4.5 4.5L13.5 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.5 4.5L4.5 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </motion.svg>
);

const MenuRing = ({
  isOpen,
  onClick,
  children,
}: {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.div
    className="w-10 h-10 rounded-full border border-current flex items-center justify-center cursor-pointer relative"
    onClick={onClick}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    whileHover="hover"
    variants={{
      closed: {
        rotate: 0,
      },
      open: {
        rotate: 90,
      },
      hover: {
        scale: 1.2,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      },
    }}
    transition={{
      duration: 0.4,
      ease: [0.32, 0.72, 0, 1],
    }}
  >
    {children}
  </motion.div>
);

const MenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="relative">
    <MenuRing isOpen={isOpen} onClick={onClick}>
      <HamburgerIcon isOpen={isOpen} />
      <CloseIcon isOpen={isOpen} />
    </MenuRing>
  </div>
);

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const menuItemVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

const letterVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Header({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) {
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId.toLowerCase());
    if (!section) return;

    // First close the menu
    setIsMenuOpen(false);

    // Wait for menu close animation to complete
    setTimeout(() => {
      const headerHeight = 80;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 10); // Delay to match menu close animation
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled && !isMenuOpen ? "bg-white/80 backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={`flex items-center space-x-3 ${
              isMenuOpen ? "text-white" : "text-[#2D3A2A]"
            } transition-colors duration-300`}
          >
            <span className="text-2xl font-logo tracking-wider transform -rotate-3 py-2 hover:rotate-0 transition-transform duration-300">
              Kalki Palanisamy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex space-x-8 ${
              isMenuOpen ? "text-white" : "text-[#2D3A2A]"
            } transition-colors duration-300`}
          >
            {["About", "Experience", "Expertise", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-regular tracking-wider relative group px-4 py-2"
                >
                  <span className="relative z-10">{item.toUpperCase()}</span>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div
            className={`lg:hidden fixed top-4 right-4 ${
              isMenuOpen ? "text-white" : "text-[#2D3A2A]"
            } transition-colors duration-100`}
          >
            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#4A6741] z-50 flex flex-col items-center justify-center gap-12 md:gap-20 pt-8"
          >
            {["About", "Experience", "Expertise", "Contact"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    delay: i * 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-4xl md:text-5xl font-regular px-6 py-6 md:py-10 hover:opacity-60 transition-opacity text-white"
                  >
                    {item
                      .split("")
                      .map((letter, index) => (
                        <motion.span
                          key={index}
                          variants={letterVariants}
                          initial="initial"
                          animate="animate"
                          transition={{
                            duration: 0.8,
                            delay: i * 0.05 + index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                  </a>
                </motion.div>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
