import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImage}
          alt="Bar atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial-glow"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-baseline gap-3 mb-8">
            <span className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-foreground">
              Mesa
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-brand px-5 py-2 md:px-7 md:py-3 rounded-xl font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground glow-shadow"
            >
              Ads
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            A maior rede de mídia de mesa do país.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          {["Recorrente", "Escalável", "Hiperlocal"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.15 }}
              className="text-primary font-display font-bold text-base md:text-lg tracking-wide"
            >
              {word}
              {i < 2 && <span className="text-border ml-3">|</span>}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#ideia"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-brand px-10 py-4 rounded-xl font-display font-bold text-lg text-primary-foreground glow-shadow transition-all duration-300"
          >
            Conheça o Projeto
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass-surface gradient-border px-10 py-4 rounded-xl font-display font-bold text-lg text-foreground transition-all duration-300"
          >
            Fale Conosco
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ height: ["8px", "16px", "8px"], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
