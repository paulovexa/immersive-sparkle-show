import FadeInSection from "./FadeInSection";
import { CheckCircle2 } from "lucide-react";

const RevenueSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Modelo de Receita
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              💰 Margem baseada em mídia, não apenas impressão
            </h2>
            <div className="space-y-6">
              {["Previsibilidade de receita", "Giro constante de campanhas", "Volume recorrente"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-foreground text-lg">{item}</p>
                  </div>
                )
              )}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="glass-surface rounded-2xl p-10 space-y-8">
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Receita por campanha</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-brand flex-shrink-0" />
                    <p className="text-foreground text-lg">Produção das bolachas</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-brand flex-shrink-0" />
                    <p className="text-foreground text-lg">Veiculação e gestão da rede</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">MVP — Manaus</p>
                <p className="text-gradient-brand font-display text-3xl font-bold">R$ 4-6 milhões</p>
                <p className="text-muted-foreground text-sm mt-1">Mercado endereçável estimado</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
