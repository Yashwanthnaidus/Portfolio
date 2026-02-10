import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 section-padding py-6 flex justify-between items-center mix-blend-difference"
    >
      <MagneticButton>
        <Link to="/" className="font-display text-lg font-bold text-foreground cursor-none">
          FOLIO<span className="text-primary">.</span>
        </Link>
      </MagneticButton>

      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <MagneticButton key={item.label}>
            <Link
              to={item.path}
              className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 cursor-none ${
                location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
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
