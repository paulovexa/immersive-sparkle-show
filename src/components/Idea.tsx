import Reveal from "./Reveal";
import brandsImg from "@/assets/coasters-brands.jpg";
import { motion } from "framer-motion";

const Idea = () => (
  <section id="ideia" className="py-28 md:py-36 border-b border-border relative overflow-hidden">
    <div className="container mx-auto px-6">
      <Reveal>
        <p className="section-label mb-4">A ideia</p>
        <h2 className="section-title max-w-3xl mb-6">
          Mídia física de alta atenção,{" "}
          <span className="text-gradient-brand">onde as pessoas se conectam.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-20 leading-relaxed">
          Enquanto o digital disputa frações de segundo, nós capturamos a atenção no
          momento social — com mídia contextual, tangível e recorrente.
        </p>
      </Reveal>

      {/* Full-width image showcase */}
      <Reveal>
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <motion.img
            src={brandsImg}
            alt="Porta-copos com marcas como Uber, iFood, Bemol, Spotify, Mercado Livre e 99"
            className="w-full h-[300px] md:h-[450px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-foreground font-display font-700 text-xl md:text-2xl">
              Grandes marcas, na mesa do consumidor.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Porta-copos personalizados com a identidade visual da sua marca.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { label: "Tangível", desc: "O consumidor toca, segura e interage diretamente com a sua marca durante toda a experiência." },
          { label: "Contextual", desc: "Publicidade entregue no momento certo, no lugar certo — onde o consumidor está relaxado e atento." },
          { label: "Recorrente", desc: "Campanhas rotativas a cada 4 semanas com presença contínua em múltiplos estabelecimentos." },
        ].map((item, i) => (
          <Reveal key={item.label} delay={0.1 + i * 0.1}>
            <div className="card-glass p-8 h-full hover:border-primary/20 transition-colors duration-300">
              <span className="text-primary font-display font-800 text-sm tracking-wider">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display font-700 text-foreground text-xl mt-3 mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Idea;
