import { Github, ExternalLink } from "lucide-react";

const GitHubSection = () => {
  return (
    <section id="github" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
          Meu <span className="gradient-cyber-text">GitHub</span>
        </h2>
        <div className="w-16 h-0.5 gradient-cyber mx-auto mb-12" />

        <div className="max-w-lg mx-auto bg-card border border-border rounded-lg p-8 text-center hover:neon-border transition-all duration-300">
          {/* Avatar */}
          <img
            src="https://github.com/fabiopaziam.png"
            alt="Fabio Paziam GitHub"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/40"
          />

          <h3 className="font-display text-lg font-semibold text-foreground mb-1">fabiopaziam</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Desenvolvedor Web apaixonado por código limpo, design moderno e soluções que fazem a diferença.
          </p>

          <a
            href="https://github.com/fabiopaziam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md gradient-cyber text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity animate-glow-pulse"
          >
            <Github size={18} />
            Ver Perfil no GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
