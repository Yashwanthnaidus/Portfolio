import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import MagneticButton from "@/components/MagneticButton";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Project Alpha", category: "Web Design", num: "01", description: "A premium web experience crafted with cutting-edge design principles and immersive animations." },
  { title: "Project Beta", category: "Development", num: "02", description: "Full-stack application built for scale, featuring real-time data and seamless interactions." },
  { title: "Project Gamma", category: "Branding", num: "03", description: "Complete brand identity system including visual language, typography, and digital presence." },
  { title: "Project Delta", category: "Interactive", num: "04", description: "Experimental interactive experience pushing the boundaries of web-based storytelling." },
  { title: "Project Epsilon", category: "No-Code", num: "05", description: "Rapid prototyping and deployment using modern no-code tools and visual editing platforms." },
  { title: "Project Zeta", category: "Marketing", num: "06", description: "Data-driven marketing campaign with immersive landing pages and conversion optimization." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

const Work = () => {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body">Selected Work</p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight"
            >
              MY
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight text-stroke"
            >
              PROJECTS
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="section-padding pb-32 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.num}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden cursor-none"
            >
              {/* Card content */}
              <div className="relative p-8 md:p-12 min-h-[320px] md:min-h-[400px] flex flex-col justify-end">
                {/* Big number background */}
                <span className="absolute top-6 right-8 font-display text-[8rem] md:text-[10rem] font-extrabold text-foreground/[0.03] group-hover:text-primary/[0.08] transition-colors duration-700 leading-none">
                  {project.num}
                </span>

                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3 font-body relative z-10">
                  {project.category}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md relative z-10">
                  {project.description}
                </p>

                <MagneticButton className="mt-6 self-start">
                  <span className="flex items-center gap-2 text-sm font-body text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-none">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </span>
                </MagneticButton>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Work;
