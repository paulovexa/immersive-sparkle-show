import Reveal from "./Reveal";
import coasterImg from "@/assets/coasters.jpg";

const Idea = () => (
  <section id="ideia" className="py-28 md:py-36 border-b border-border">
    <div className="container mx-auto px-6">
      <Reveal>
        <p className="section-label mb-4">A ideia</p>
        <h2 className="section-title max-w-3xl mb-6">
          Mídia física de alta atenção,{" "}
          <span className="text-gradient-brand">onde as pessoas se conectam.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-16 leading-relaxed">
          Enquanto o digital disputa frações de segundo, nós capturamos a atenção no
          momento social — com mídia contextual, tangível e recorrente.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-5 gap-8 items-center">
        <Reveal className="md:col-span-3">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={coasterImg}
              alt="Porta-copos publicitários"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </Reveal>

        <div className="md:col-span-2 space-y-4">
          {[
            { label: "Tangível", desc: "O consumidor toca, segura e interage com a sua marca." },
            { label: "Contextual", desc: "Publicidade entregue no momento certo, no lugar certo." },
            { label: "Recorrente", desc: "Campanhas rotativas a cada 4 semanas com presença contínua." },
          ].map((item, i) => (
            <Reveal key={item.label} delay={0.1 + i * 0.1}>
              <div className="card-glass p-6 hover:border-primary/20 transition-colors duration-300">
                <h3 className="font-display font-700 text-foreground text-lg mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Idea;
