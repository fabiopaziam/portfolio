import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techs: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Paziam Neon Studio",
    description:
      "Interface futurista desenvolvida com React e TypeScript, focada em animações suaves, design moderno e experiência do usuário.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/paziam-neon.png",
    liveUrl: "https://paziam-neom-studio.vercel.app/",
    repoUrl: "https://github.com/fabiopaziam/paziam-neon-studio",
  },
  {
    title: "Landing Page SaaS",
    description:
      "Página de captura moderna para produto SaaS com seções estratégicas de conversão.",
    techs: ["HTML5", "CSS3", "JavaScript"],
    image: "/preview.jpg",
    liveUrl: "#",
    repoUrl: "https://github.com/fabiopaziam",
  },
  {
    title: "Dashboard Admin",
    description:
      "Painel administrativo com gráficos interativos, tabelas dinâmicas e tema dark.",
    techs: ["React", "Recharts", "Tailwind"],
    image: "/preview.jpg",
    liveUrl: "#",
    repoUrl: "https://github.com/fabiopaziam",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
          Meus <span className="gradient-cyber-text">Projetos</span>
        </h2>
        <div className="w-16 h-0.5 gradient-cyber mx-auto mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() =>
                project.liveUrl && window.open(project.liveUrl, "_blank")
              }
              className="cursor-pointer group bg-card border border-border rounded-lg overflow-hidden hover:neon-border transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="font-display text-sm font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Techs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-pixel bg-muted text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> Ver Projeto
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} /> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
