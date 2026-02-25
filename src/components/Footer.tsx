import { Mail, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Vamos <span className="gradient-cyber-text">Conversar</span>?
        </h2>

        <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
          Interessado em trabalhar juntos? Entre em contato e vamos transformar sua ideia em realidade.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          
          {/* EMAIL */}
          <a
            href="mailto:fabio.paziam@gmail.com"
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/fabiopaziam"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/biofa_paziam"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

        </div>

        <div className="border-t border-border pt-6">
          <p className="font-pixel text-[8px] text-muted-foreground tracking-wider">
            © 2026 FABIO PAZIAM — TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
