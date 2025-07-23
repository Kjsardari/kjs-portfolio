import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const navItems = ["Home", "About", "Project", "Work", "Contact"];
  return (
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-lg font-medium text-neutral-400">
      {navItems.map((item) => (
        <motion.li
          key={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
            className="hover:text-purple-300 transition-colors duration-300"
          >
            <a
            href={item === "Contact" ? "#contact" : `#${item.toLowerCase()}`}
            className="hover:text-purple-300 transition-colors duration-300"
          ></a>
            <a
            href={item === "Project" ? "#project" : `#${item.toLowerCase()}`}
            className="hover:text-purple-300 transition-colors duration-300"
          ></a>
            <a
            href={item === "Experience" ? "#work" : `#${item.toLowerCase()}`}
            className="hover:text-purple-300 transition-colors duration-300"
          ></a>
            {item}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 z-20 w-full backdrop-blur-md bg-black/70 border-b border-white/10 shadow-lg"
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* LOGO + KJS */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 text-xl font-bold text-neutral-300 hover:text-white transition-colors duration-300"
          >
            <img src="/assets/logos/KLogo.svg" alt="KJS Logo" className="w-8 h-8" />

            KJS
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex cursor-pointer text-neutral-400 hover:text-purple-300 focus:outline-none"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block sm:hidden text-center py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
