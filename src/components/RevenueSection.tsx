import FadeInSection from "./FadeInSection";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const RevenueSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2 -translate-x-1/2"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <FadeInSection direction="left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-brand" />
              <p className="text-primary font-display font-bold text-sm tracking-[0.25em] uppercase">
                Modelo de Receita
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-10 leading-[1.1] tracking-tight">
              Margem baseada em{" "}
              <span className="text-gradient-brand">mídia</span>, não apenas impressão
            </h2>
            <div className="space-y-5">
              {["Previsibilidade de receita", "Giro constante de campanhas", "Volume recorrente"].map(
                (item, i) => (
                  <FadeInSection key={i} delay={0.2 + i * 0.1} direction="left">
                    <div className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground text-lg font-medium">{item}</p>
                    </div>
                  </FadeInSection>
                )
              )}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3} direction="right">
            <div className="glass-surface gradient-border rounded-2xl p-12 space-y-10 hover-lift">
              <div>
                <p className="text-primary font-display font-bold text-xs uppercase tracking-[0.2em] mb-5">
                  Receita por campanha
                </p>
                <div className="space-y-4">
                  {["Produção das bolachas", "Veiculação e gestão da rede"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-brand flex-shrink-0" />
                      <p className="text-foreground text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-primary font-display font-bold text-xs uppercase tracking-[0.2em] mb-3">
                  MVP — Manaus
                </p>
                <p className="text-gradient-brand font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                  R$ 4-6M
                </p>
                <p className="text-muted-foreground text-sm mt-2">Mercado endereçável estimado</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
