import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-40" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeInSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Pronto para capturar atenção<br />
            <span className="text-gradient-brand">no momento certo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-12">
            Entre em contato e descubra como a Mesa Ads pode transformar a presença da sua marca.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <motion.a
            href="mailto:contato@mesaads.com.br"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-brand px-12 py-5 rounded-xl font-display font-bold text-xl text-primary-foreground glow-shadow"
          >
            Entre em Contato
          </motion.a>
        </FadeInSection>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">Mesa</span>
            <span className="bg-gradient-brand px-2 py-0.5 rounded text-sm font-display font-bold text-primary-foreground">
              Ads
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2026 Mesa Ads. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
