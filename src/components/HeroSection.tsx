import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bar atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial-glow animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground">
              Mesa
            </span>
            <span className="bg-gradient-brand px-4 py-2 md:px-6 md:py-3 rounded-lg font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
              Ads
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          A maior rede de mídia de mesa do país.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-primary font-semibold mb-12"
        >
          Recorrente. Escalável. Hiperlocal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#ideia"
            className="bg-gradient-brand px-8 py-4 rounded-lg font-display font-semibold text-lg text-primary-foreground hover:opacity-90 transition-opacity glow-shadow"
          >
            Conheça o Projeto
          </a>
          <a
            href="#contato"
            className="glass-surface px-8 py-4 rounded-lg font-display font-semibold text-lg text-foreground hover:bg-card transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
