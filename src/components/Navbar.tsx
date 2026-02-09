import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 section-padding py-6 flex justify-between items-center mix-blend-difference"
    >
      <MagneticButton>
        <span className="font-display text-lg font-bold text-foreground cursor-none">
          FOLIO<span className="text-primary">.</span>
        </span>
      </MagneticButton>

      <div className="hidden md:flex items-center gap-10">
        {["Work", "About", "Contact"].map((item) => (
          <MagneticButton key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-300 cursor-none"
            >
              {item}
            </a>
          </MagneticButton>
        ))}
      </div>

      <MagneticButton>
        <div className="flex flex-col gap-[5px] cursor-none md:hidden">
          <span className="w-6 h-[1.5px] bg-foreground" />
          <span className="w-4 h-[1.5px] bg-foreground" />
        </div>
      </MagneticButton>
    </motion.nav>
  );
};

export default Navbar;
