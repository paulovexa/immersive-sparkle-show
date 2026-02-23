import Reveal from "./Reveal";
import { Zap, MapPin, RotateCw, type LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Zap, title: "Alta frequência", desc: "Exposição contínua durante toda a experiência — cada interação é uma impressão de marca." },
  { icon: MapPin, title: "Distribuição controlada", desc: "Escolha bairros, perfis e estabelecimentos. Publicidade granular como nunca antes." },
  { icon: RotateCw, title: "Campanhas rotativas", desc: "Batches ativam múltiplos estabelecimentos por 4 semanas, criando presença contínua e escalável." },
];

const Solution = () => (
  <section className="py-28 md:py-36 border-b border-border relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 relative">
      <Reveal>
        <p className="section-label mb-4">A solução</p>
        <h2 className="section-title max-w-4xl mb-6">
          Porta-copos que se tornam{" "}
          <span className="text-gradient-brand">mídia de impacto.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-16 leading-relaxed">
          Uma rede escalável que conecta marcas locais ao momento social, com
          alcance e recorrência que o digital não consegue replicar.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div className="card-glass p-8 h-full relative group overflow-hidden hover:border-primary/20 transition-colors duration-300">
              {/* Top line on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-500" />

              <span className="block font-display text-6xl font-900 text-foreground/[0.04] mb-4 select-none">
                0{i + 1}
              </span>
              <f.icon className="w-7 h-7 text-primary mb-4 opacity-80" />
              <h3 className="font-display font-700 text-xl text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
