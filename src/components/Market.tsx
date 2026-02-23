import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { end: 5, suffix: ",5 bi", prefix: "R$", label: "Mercado OOH Brasil 2024" },
  { end: 89, suffix: "%", prefix: "", label: "Da população atingida por OOH" },
  { end: 11, suffix: "%", prefix: "", label: "Do bolo publicitário total" },
  { end: 10887, suffix: "", prefix: "", label: "Restaurantes e estabelecimentos em Manaus" },
];

const Market = () => (
  <section className="py-28 md:py-36 border-b border-border">
    <div className="container mx-auto px-6">
      <Reveal>
        <p className="section-label mb-4">O mercado</p>
        <h2 className="section-title max-w-3xl mb-20">
          Um mercado de{" "}
          <span className="text-gradient-brand">bilhões</span> em crescimento.
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="card-glass p-7 text-center">
              <p className="stat-value text-gradient-brand mb-2">
                <Counter end={s.end} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            A mídia OOH atinge <span className="text-foreground font-semibold">89% da população brasileira</span>,
            e o segmento cresceu para representar mais que o dobro do valor de uma década atrás.
            O meio físico segue forte — sobretudo em campanhas com foco em{" "}
            <span className="text-primary font-semibold">presença local</span>.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Market;
