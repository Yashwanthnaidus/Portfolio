import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import MagneticButton from "@/components/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Visual Editing", level: 90 },
  { name: "No-Code Development", level: 88 },
  { name: "Marketing Strategy", level: 85 },
  { name: "Branding & Identity", level: 92 },
  { name: "Motion Design", level: 80 },
];

const experiences = [
  { year: "2024 — Present", role: "Lead Creative Designer", company: "Studio X" },
  { year: "2022 — 2024", role: "Senior Visual Designer", company: "Agency Y" },
  { year: "2020 — 2022", role: "UI/UX Designer", company: "Startup Z" },
  { year: "2018 — 2020", role: "Junior Designer", company: "Design Co." },
];

const About = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body">About Me</p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight"
            >
              THE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight text-stroke"
            >
              STORY
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Bio with parallax */}
      <section ref={parallaxRef} className="section-padding py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            style={{ y: yText }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-bold leading-snug"
            >
              I'm a creative designer who believes in the power of visual storytelling.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed"
            >
              With a passion for crafting immersive digital experiences, I blend design, motion, and strategy to build brands that resonate. Every pixel has purpose, every animation tells a story.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed"
            >
              From no-code platforms to pixel-perfect visual editing, I leverage the best tools to deliver results that exceed expectations—fast, beautiful, and effective.
            </motion.p>
          </motion.div>

          {/* Placeholder image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl bg-card border border-border overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl font-extrabold text-foreground/[0.05]">PHOTO</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-12 font-body"
          >
            Expertise
          </motion.p>

          <div className="space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">{skill.level}%</span>
                </div>
                <div className="w-full h-[2px] bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    transition={{ duration: 1.2, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                    viewport={{ once: true }}
                    className="h-full bg-primary origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-12 font-body"
          >
            Experience
          </motion.p>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 12 }}
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-12 py-8 border-b border-border cursor-none"
              >
                <span className="text-sm text-muted-foreground font-body w-40 flex-shrink-0">{exp.year}</span>
                <span className="font-display text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 flex-1">
                  {exp.role}
                </span>
                <span className="text-sm text-muted-foreground font-body">{exp.company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};

export default About;
