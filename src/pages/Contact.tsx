import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import MagneticButton from "@/components/MagneticButton";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const socials = [
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Behance", href: "#" },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />

      {/* Main content */}
      <section className="section-padding pt-32 pb-20 md:pt-44 flex-1 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body"
          >
            Get in Touch
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight"
            >
              LET'S
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight text-stroke"
            >
              CONNECT
            </motion.h1>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-20 md:mt-32">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-12"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind? Let's create something extraordinary together. I'm always open to discussing new opportunities.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@yourname.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 group cursor-none"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground font-body uppercase tracking-widest">{item.label}</p>
                      <p className="text-foreground font-display font-semibold group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: socials */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-8 font-body">Follow Me</p>
              <div className="space-y-0">
                {socials.map((social, i) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                  >
                    <MagneticButton className="w-full">
                      <a
                        href={social.href}
                        className="flex items-center justify-between w-full py-6 border-b border-border group cursor-none"
                      >
                        <span className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary group-hover:translate-x-3 transition-all duration-500">
                          {social.name}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                      </a>
                    </MagneticButton>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="section-padding py-8 border-t border-border"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-body">© 2026 — All Rights Reserved</p>
          <p className="font-body">Designed with passion</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Contact;
