import Reveal from "./Reveal";
import { Check } from "lucide-react";

const Revenue = () => (
  <section className="py-28 md:py-36 border-b border-border">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <Reveal>
            <p className="section-label mb-4">Modelo de receita</p>
            <h2 className="section-title mb-8">
              Receita{" "}
              <span className="text-gradient-brand">recorrente e escalável.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Margem baseada em mídia — não apenas impressão gráfica.
              Isso garante previsibilidade, giro constante e volume crescente.
            </p>
          </Reveal>

          <div className="space-y-3">
            {["Previsibilidade de receita", "Giro constante de campanhas", "Volume recorrente e escalável"].map(
              (item, i) => (
                <Reveal key={i} delay={0.2 + i * 0.08}>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="card-glass p-10">
            <p className="section-label mb-6">Receita por campanha</p>
            <div className="space-y-4 mb-10">
              {["Produção das bolachas personalizadas", "Veiculação e gestão da rede de pontos"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <p className="section-label mb-2">MVP — Manaus</p>
              <p className="font-display text-5xl md:text-6xl font-900 text-gradient-brand tracking-tight">
                R$ 4–6M
              </p>
              <p className="text-muted-foreground text-sm mt-2">Mercado endereçável estimado</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Revenue;
