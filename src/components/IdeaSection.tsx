import FadeInSection from "./FadeInSection";
import coasersImage from "@/assets/coasters.jpg";
import { motion } from "framer-motion";

const IdeaSection = () => {
  return (
    <section id="ideia" className="relative py-32 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-brand" />
            <p className="text-primary font-display font-bold text-sm tracking-[0.25em] uppercase">
              A Ideia
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 max-w-4xl leading-[1.1] tracking-tight">
            Rede de mídia física
            <br />
            <span className="text-gradient-brand">hiperlocal</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-20 leading-relaxed">
            Porta-copos como canal publicitário de alta atenção dentro de bares e restaurantes.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <FadeInSection delay={0.2} direction="left">
              <div className="glass-surface gradient-border rounded-2xl p-10 hover-lift">
                <p className="text-muted-foreground text-lg mb-5 font-body">
                  Enquanto o digital disputa segundos…
                </p>
                <p className="text-foreground text-2xl md:text-3xl font-display font-bold leading-snug">
                  Nós capturamos atenção no{" "}
                  <span className="text-gradient-brand">momento social.</span>
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.35} direction="left">
              <div className="glass-surface gradient-border rounded-2xl p-10 hover-lift">
                <div className="flex gap-6">
                  {["Física", "Contextual", "Recorrente"].map((word, i) => (
                    <motion.div
                      key={word}
                      className="flex-1 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-brand" />
                      </div>
                      <p className="text-foreground font-display font-bold text-sm md:text-base">{word}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.3} direction="right">
            <div className="relative group">
              <motion.div
                className="absolute -inset-3 bg-gradient-brand rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={coasersImage}
                  alt="Porta-copos publicitários Mesa Ads"
                  className="w-full object-cover aspect-square"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
