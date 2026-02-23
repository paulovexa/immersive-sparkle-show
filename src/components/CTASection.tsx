import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-radial-glow"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeInSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-8 leading-[1.05] tracking-tight">
            Pronto para capturar atenção
            <br />
            <span className="text-gradient-brand">no momento certo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-14 leading-relaxed">
            Entre em contato e descubra como a Mesa Ads pode transformar a presença da sua marca.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <motion.a
            href="mailto:contato@mesaads.com.br"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-brand px-14 py-5 rounded-xl font-display font-bold text-xl text-primary-foreground glow-shadow transition-all duration-300"
          >
            Entre em Contato
          </motion.a>
        </FadeInSection>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32">
        <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold text-foreground tracking-tight">Mesa</span>
            <span className="bg-gradient-brand px-2.5 py-1 rounded-md text-sm font-display font-bold text-primary-foreground">
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
