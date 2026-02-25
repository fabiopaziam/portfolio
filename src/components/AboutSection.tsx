import { Code, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
          Sobre <span className="gradient-cyber-text">Mim</span>
        </h2>
        <div className="w-16 h-0.5 gradient-cyber mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Code className="text-primary" size={28} />,
              title: "Desenvolvimento Profissional",
              desc: "Criação de sites modernos, rápidos e organizados, com código limpo e estrutura pensada para facilitar manutenção e evolução do projeto.",
            },
            {
              icon: <Palette className="text-accent" size={28} />,
              title: "Design Estratégico",
              desc: "Interfaces responsivas, elegantes e focadas na experiência do usuário. Cada detalhe é pensado para transmitir profissionalismo e gerar confiança.",
            },
            {
              icon: <Zap className="text-neon-amber" size={28} />,
              title: "Foco em Resultado",
              desc: "Mais do que um site bonito: desenvolvo soluções que ajudam a atrair clientes, fortalecer sua marca e gerar oportunidades reais de negócio.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 text-center hover:neon-border transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-display text-sm font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;