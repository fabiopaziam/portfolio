import avatarImg from "@/assets/avatar.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100% / 0.05) 2px, hsl(0 0% 100% / 0.05) 4px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8">
        {/* Avatar */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/50 neon-glow animate-fade-in-up">
          <img
            src={avatarImg}
            alt="Fabio Paziam - Desenvolvedor Front-End"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <p className="font-pixel text-[10px] md:text-xs text-primary tracking-[0.3em] uppercase mb-3 text-glow-red">
            Desenvolvedor Front-End
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground tracking-tight">
            Fabio <span className="gradient-cyber-text">Paziam</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-muted-foreground text-base md:text-lg max-w-xl animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Desenvolvo sites modernos, rápidos e profissionais para empresas e
          empreendedores que querem fortalecer sua presença digital e atrair
          mais clientes.
        </p>

        {/* CTA */}
        <div
          className="flex gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md gradient-cyber text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity animate-glow-pulse"
          >
            Ver Meu Trabalho
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-primary/40 text-foreground font-semibold text-sm hover:bg-primary/10 transition-colors"
          >
            Falar Comigo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
