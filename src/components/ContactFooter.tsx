import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer className="section-padding py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-8 font-body">
          Get in Touch
        </p>

        <MagneticButton className="cursor-none">
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold leading-[0.9] hover:text-gradient transition-all duration-500 group">
            LET'S
            <br />
            <span className="text-stroke group-hover:text-stroke-gold transition-all duration-500">TALK</span>
            <ArrowUpRight className="inline-block w-10 h-10 md:w-16 md:h-16 ml-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h2>
        </MagneticButton>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground border-t border-border pt-8"
        >
          <p className="font-body">© 2026 — All Rights Reserved</p>
          <div className="flex gap-8">
            {["Twitter", "GitHub", "LinkedIn", "Dribbble"].map((link) => (
              <MagneticButton key={link}>
                <a
                  href="#"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-none"
                >
                  {link}
                </a>
              </MagneticButton>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ContactFooter;
