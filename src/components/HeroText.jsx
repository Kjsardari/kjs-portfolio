import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const flipWords = ["Secure", "Modern", "Scalable"];
  const roles = [
    "Web Developer",
    "UI/UX Designer",
    "AI ML Engineer",
    "Graphics Designer",
    "Video Editor",
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textShadowStyle = {
    textShadow: "0 0 12px rgba(3, 3, 3, 0.8), 0 0 24px rgba(147, 51, 234, 0.6)",
  };

  const buttonClasses = `
    group inline-flex items-center gap-2 px-6 py-3 mt-4
    text-white border border-white rounded-lg 
    text-lg font-semibold transition-all duration-300 ease-in-out
    hover:bg-white hover:text-black
  `;

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="hidden flex-col space-y-2 md:flex c-space">
        <motion.h1
          className="text-4xl font-medium bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent"
          style={textShadowStyle}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Kamaljeet
        </motion.h1>

        <div className="flex flex-col items-start space-y-2">
          <motion.div
            className="text-5xl font-medium text-neutral-300 drop-shadow"
            style={textShadowStyle}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords
              words={roles}
              className="font-medium text-5xl text-neutral-300"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300 drop-shadow"
            style={textShadowStyle}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            Dedicated to Craft
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <FlipWords
              words={flipWords}
              className="font-black text-white text-7xl drop-shadow-lg"
            />
          </motion.div>

          <motion.p
            className="text-3xl font-medium text-neutral-300 drop-shadow"
            style={textShadowStyle}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Solutions
          </motion.p>

          {/* Download Button */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            <a href="/Kamaljeet-CV.pdf" download className={buttonClasses}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-3 md:hidden">
        <motion.p
          className="text-4xl font-medium bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent"
          style={textShadowStyle}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Kamaljeet
        </motion.p>

        <motion.div
          className="text-4xl font-bold text-neutral-300 drop-shadow"
          style={textShadowStyle}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <FlipWords
            words={roles}
            className="text-4xl font-bold text-neutral-300"
          />
        </motion.div>

        <motion.p
          className="text-3xl font-bold text-neutral-300 drop-shadow"
          style={textShadowStyle}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
          Dedicated to Craft
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          <FlipWords
            words={flipWords}
            className="font-bold text-white text-6xl drop-shadow-lg"
          />
        </motion.div>

        <motion.p
          className="text-3xl font-bold text-neutral-300 drop-shadow"
          style={textShadowStyle}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Solutions
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          <a href="/Kamaljeet-CV.pdf" download className={buttonClasses}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
