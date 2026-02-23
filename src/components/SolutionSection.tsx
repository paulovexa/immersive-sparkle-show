import FadeInSection from "./FadeInSection";
import { Zap, MapPin, RotateCw } from "lucide-react";

const features = [
  { icon: Zap, title: "Alta frequência", desc: "Exposição contínua durante toda a experiência no estabelecimento." },
  { icon: MapPin, title: "Distribuição geográfica controlada", desc: "Selecione bairros, regiões e perfis de público." },
  { icon: RotateCw, title: "Campanhas rotativas", desc: "Cada batch ativa múltiplos bares por 4 semanas, criando presença contínua." },
];

const SolutionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            A Solução
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl leading-tight">
            🚀 Transformamos bolachas de mesa em mídia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            Uma rede escalável de mídia física que conecta marcas ao momento social dos consumidores.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FadeInSection key={i} delay={i * 0.2}>
              <div className="glass-surface rounded-2xl p-10 h-full relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <f.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{f.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{f.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
