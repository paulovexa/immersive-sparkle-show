import Reveal from "./Reveal";
import { Eye, Target, BarChart3, DollarSign, type LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Eye, title: "Atenção fragmentada", text: "O consumidor é bombardeado por anúncios digitais e ignora a maioria em menos de 2 segundos." },
  { icon: Target, title: "Sem lembrança real", text: "Gerar impacto duradouro e lembrança de marca no offline é cada vez mais difícil." },
  { icon: BarChart3, title: "Zero mensuração", text: "Campanhas offline tradicionais não oferecem dados confiáveis de performance." },
  { icon: DollarSign, title: "OOH caro e genérico", text: "Outdoors e painéis são inacessíveis para marcas locais e pouco segmentados." },
];

const Problem = () => (
  <section className="py-28 md:py-36 border-b border-border">
    <div className="container mx-auto px-6">
      <Reveal>
        <p className="section-label mb-4">O problema</p>
        <h2 className="section-title max-w-3xl mb-16">
          A publicidade local está{" "}
          <span className="text-gradient-brand">presa no passado.</span>
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="card-glass p-8 h-full group hover:border-primary/20 transition-colors duration-300">
              <item.icon className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-700 text-foreground text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
