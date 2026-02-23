import FadeInSection from "./FadeInSection";
import coasersImage from "@/assets/coasters.jpg";

const IdeaSection = () => {
  return (
    <section id="ideia" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <p className="text-primary font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            A Ideia
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl leading-tight">
            Rede de mídia física hiperlocal
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-16">
            Porta-copos como canal publicitário de{" "}
            <span className="text-gradient-brand font-semibold">alta atenção</span>{" "}
            dentro de bares e restaurantes.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection delay={0.2}>
            <div className="space-y-8">
              <div className="glass-surface rounded-xl p-8">
                <p className="text-muted-foreground text-lg mb-4">
                  Enquanto o digital disputa segundos…
                </p>
                <p className="text-foreground text-2xl md:text-3xl font-display font-bold">
                  👉 Nós capturamos atenção no{" "}
                  <span className="text-gradient-brand">momento social.</span>
                </p>
              </div>

              <div className="glass-surface rounded-xl p-8">
                <p className="text-foreground text-xl font-medium">
                  É mídia <span className="text-primary">física</span>,{" "}
                  <span className="text-primary">contextual</span> e{" "}
                  <span className="text-primary">recorrente</span>.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-brand rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <img
                src={coasersImage}
                alt="Porta-copos publicitários Mesa Ads"
                className="relative rounded-2xl w-full object-cover aspect-square"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
