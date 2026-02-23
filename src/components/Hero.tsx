import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bar.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-end pb-24 overflow-hidden">
    {/* BG */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
    </motion.div>

    {/* Nav */}
    <motion.nav
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-2xl font-800 text-foreground">Mesa</span>
        <span className="bg-brand text-primary-foreground font-display font-700 text-sm px-2 py-0.5 rounded-md">
          Ads
        </span>
      </div>
      <a
        href="#contato"
        className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        Contato
      </a>
    </motion.nav>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6">
      <motion.h1
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-900 text-foreground leading-[0.95] tracking-tight mb-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Sua marca na mesa
        <br />
        <span className="text-gradient-brand">do consumidor.</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        A maior rede de mídia de mesa do país — porta-copos publicitários em
        restaurantes, cafés e estabelecimentos com alta atenção e alcance hiperlocal.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.a
          href="#ideia"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-brand px-8 py-3.5 rounded-xl font-display font-700 text-primary-foreground glow transition-all"
        >
          Saiba mais
        </motion.a>
        <motion.a
          href="#contato"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="border border-border bg-secondary/50 backdrop-blur-sm px-8 py-3.5 rounded-xl font-display font-600 text-foreground transition-all"
        >
          Fale conosco
        </motion.a>
      </motion.div>
    </div>

    {/* Bottom fade line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
  </section>
);

export default Hero;
