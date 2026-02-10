const Marquee = () => {
  const items = ["DEVELOPMENT", "DESIGN", "MARKETING", "NO-CODE DEVELOPMENT", "VISUAL EDITING", "INTERACTION", "MOTION", "STRATEGY", "BRANDING"];
  const repeated = [...items, ...items];

  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-border">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mx-6 md:mx-10 text-muted-foreground/20 hover:text-primary transition-colors duration-500 select-none"
          >
            {item}
            <span className="text-primary mx-6 md:mx-10">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
