import Reveal from "./Reveal";
import { motion } from "framer-motion";

const CTA = () => (
  <section id="contato" className="py-28 md:py-36 relative overflow-hidden">
    {/* Ambient */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative text-center">
      <Reveal>
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-900 text-foreground leading-[1] tracking-tight mb-6">
          Coloque sua marca
          <br />
          <span className="text-gradient-brand">na mesa certa.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
          Fale com a gente e descubra como a Mesa Ads transforma a presença da sua marca.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <motion.a
          href="mailto:contato@mesaads.com.br"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-brand px-12 py-4 rounded-xl font-display font-700 text-lg text-primary-foreground glow transition-all"
        >
          Entre em contato
        </motion.a>
      </Reveal>
    </div>

    {/* Footer */}
    <div className="container mx-auto px-6 mt-28">
      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-800 text-foreground">Mesa</span>
          <span className="bg-brand text-primary-foreground font-display font-700 text-xs px-1.5 py-0.5 rounded">
            Ads
          </span>
        </div>
        <p className="text-muted-foreground text-xs">
          © 2026 Mesa Ads. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
