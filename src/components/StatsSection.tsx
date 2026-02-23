import FadeInSection from "./FadeInSection";
import AnimatedCounter from "./AnimatedCounter";

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
          <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            O Mercado
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 max-w-3xl leading-tight">
            Crescimento do mercado OOH no Brasil
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="glass-surface rounded-2xl p-8 text-center group hover:border-primary/30 transition-colors">
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-brand mb-3">
                  <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="glass-surface rounded-2xl p-10 mt-12 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              O meio físico continua <span className="text-foreground font-semibold">forte e valorizado</span> pelos
              anunciantes, sobretudo em campanhas com foco em{" "}
              <span className="text-primary font-semibold">presença local</span> e{" "}
              <span className="text-primary font-semibold">lembrança de marca</span>.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default StatsSection;
