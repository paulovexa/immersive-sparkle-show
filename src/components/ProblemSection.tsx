import FadeInSection from "./FadeInSection";
import { Target, Eye, BarChart3, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Eye,
    title: "Atenção fragmentada",
    text: "Marcas locais têm dificuldade em alcançar consumidores por mais de alguns segundos.",
  },
  {
    icon: Target,
    title: "Sem lembrança real",
    text: "Gerar impacto duradouro e lembrança de marca é cada vez mais difícil.",
  },
  {
    icon: BarChart3,
    title: "Sem mensuração offline",
    text: "Ativar campanhas offline com métricas confiáveis ainda é um desafio.",
  },
  {
    icon: DollarSign,
    title: "OOH caro e genérico",
    text: "Publicidade Out-of-Home tradicional é cara e pouco segmentada.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-brand" />
            <p className="text-primary font-display font-bold text-sm tracking-[0.25em] uppercase">
              O Problema
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-20 max-w-4xl leading-[1.1] tracking-tight">
            A publicidade local precisa de uma{" "}
            <span className="text-gradient-brand">revolução</span>
          </h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.12}>
              <motion.div
                className="glass-surface gradient-border rounded-2xl p-10 h-full hover-lift group cursor-default"
                whileHover={{ borderColor: "hsl(22 100% 50% / 0.3)" }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
