import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="project"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing px-4 sm:px-6 md:px-12 ml-4 sm:ml-0"
    >
      <h2 className="text-heading text-3xl sm:text-4xl font-semibold text-white mb-6 mt-4">
        My Selected Projects
      </h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full mb-2" />

      <div className="flex flex-col space-y-4">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-lg shadow-lg pointer-events-none"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
