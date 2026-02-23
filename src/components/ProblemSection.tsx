import FadeInSection from "./FadeInSection";
import { Target, Eye, BarChart3, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Eye,
    text: "Marcas locais têm dificuldade em alcançar consumidores por mais de alguns segundos.",
  },
  {
    icon: Target,
    text: "Gerar lembrança real e impacto duradouro.",
  },
  {
    icon: BarChart3,
    text: "Ativar campanhas offline com mensuração.",
  },
  {
    icon: DollarSign,
    text: "OOH tradicional é caro e pouco segmentado.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            O Problema
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16 max-w-3xl leading-tight">
            🎯 A publicidade local precisa de uma revolução
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="glass-surface rounded-xl p-8 h-full hover:border-primary/30 transition-colors group">
                <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-foreground text-lg leading-relaxed">{item.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
