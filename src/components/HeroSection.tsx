import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-center section-padding overflow-x-clip overflow-y-visible">
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6 md:mb-8"
        >
          Portfolio — 2026
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            className="font-display text-[12vw] md:text-[10vw] lg:text-[9vw] font-extrabold leading-[0.85] tracking-tighter"
          >
            CREATIVE
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.45 }}
            className="font-display text-[12vw] md:text-[10vw] lg:text-[9vw] font-extrabold leading-[0.85] tracking-tighter text-stroke"
          >
            DESIGNER
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 md:mt-16 flex justify-center"
        >
          <p className="text-muted-foreground max-w-xs text-sm md:text-base leading-relaxed text-center">
            Crafting immersive digital experiences through code, design, and motion.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <MagneticButton className="cursor-none">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default HeroSection;
