import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { title: "Project Alpha", category: "Web Design", num: "01" },
  { title: "Project Beta", category: "Development", num: "02" },
  { title: "Project Gamma", category: "Branding", num: "03" },
  { title: "Project Delta", category: "Interactive", num: "04" },
];

const WorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section className="section-padding py-20 md:py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 md:mb-24"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Selected Work</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold">
          Featured<br />
          <span className="text-stroke">Projects</span>
        </h2>
      </motion.div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-6 md:pl-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative w-[80vw] md:w-[50vw] lg:w-[40vw] h-[60vh] md:h-[70vh] flex-shrink-0 rounded-2xl bg-card border border-border overflow-hidden cursor-none"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />

                {/* Number */}
                <span className="absolute top-6 right-8 font-display text-8xl md:text-9xl font-extrabold text-foreground/5 group-hover:text-primary/10 transition-colors duration-700 z-0">
                  {project.num}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3 font-body">
                    {project.category}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
