import FadeInSection from "./FadeInSection";
import { Zap, MapPin, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, title: "Alta frequência", desc: "Exposição contínua durante toda a experiência no estabelecimento. Cada interação é uma impressão." },
  { icon: MapPin, title: "Distribuição controlada", desc: "Selecione bairros, regiões e perfis de público. Publicidade granular como nunca antes." },
  { icon: RotateCw, title: "Campanhas rotativas", desc: "Cada batch ativa múltiplos bares por 4 semanas, criando presença contínua e recorrente." },
];

const SolutionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-brand" />
            <p className="text-primary font-display font-bold text-sm tracking-[0.25em] uppercase">
              A Solução
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 max-w-4xl leading-[1.1] tracking-tight">
            Bolachas de mesa se tornam{" "}
            <span className="text-gradient-brand">mídia de impacto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-20 leading-relaxed">
            Uma rede escalável de mídia física que conecta marcas ao momento social dos consumidores.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <motion.div
                className="glass-surface rounded-2xl p-10 h-full relative group overflow-hidden hover-lift"
                whileHover="hover"
              >
                {/* Top gradient line */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-brand origin-left"
                  initial={{ scaleX: 0 }}
                  variants={{ hover: { scaleX: 1 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Number */}
                <span className="absolute top-8 right-8 font-display text-7xl font-extrabold text-primary/5 group-hover:text-primary/10 transition-colors duration-700">
                  0{i + 1}
                </span>

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-500">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{f.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
