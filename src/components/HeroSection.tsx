import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import { ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

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

      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {/* Left side - Text */}
          <div className="text-center md:text-left">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                className="font-display text-[14vw] md:text-[8vw] lg:text-[7vw] font-extrabold leading-[0.85] tracking-tighter"
              >
                CREATIVE
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.45 }}
                className="font-display text-[14vw] md:text-[8vw] lg:text-[7vw] font-extrabold leading-[0.85] tracking-tighter text-stroke"
              >
                DESIGNER
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 md:mt-12"
            >
              <p className="text-muted-foreground max-w-xs text-sm md:text-base leading-relaxed">
                Crafting immersive digital experiences through code, design, and motion.
              </p>
            </motion.div>
          </div>

          {/* Right side - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.9 }}
            className="relative"
          >
            <img
              src={heroPortrait}
              alt="Creative Designer portrait"
              className="h-[35vh] md:h-[50vh] lg:h-[60vh] w-auto object-contain"
              style={{
                filter: "drop-shadow(0 0 60px rgba(0,0,0,0.7))",
                mixBlendMode: "lighten",
              }}
            />
          </motion.div>
        </div>
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
