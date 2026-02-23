import FadeInSection from "./FadeInSection";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const stats = [
  { value: 5.5, suffix: " bi", prefix: "R$ ", label: "Mercado OOH Brasil (2024)" },
  { value: 89, suffix: "%", prefix: "", label: "Da população atingida por OOH" },
  { value: 11, suffix: "%", prefix: "", label: "Dos investimentos em publicidade" },
  { value: 10887, suffix: "+", prefix: "", label: "Bares e restaurantes em Manaus" },
];

const StatsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-brand" />
            <p className="text-primary font-display font-bold text-sm tracking-[0.25em] uppercase">
              O Mercado
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-20 max-w-3xl leading-[1.1] tracking-tight">
            Crescimento do mercado{" "}
            <span className="text-gradient-brand">OOH no Brasil</span>
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <motion.div
                className="glass-surface gradient-border rounded-2xl p-8 text-center hover-lift"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-4xl md:text-5xl font-extrabold text-gradient-brand mb-3">
                  <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="glass-surface gradient-border rounded-2xl p-12 mt-16 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              O meio físico continua <span className="text-foreground font-semibold">forte e valorizado</span> pelos
              anunciantes, sobretudo em campanhas com foco em{" "}
              <span className="text-primary font-bold">presença local</span> e{" "}
              <span className="text-primary font-bold">lembrança de marca</span>.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default StatsSection;
