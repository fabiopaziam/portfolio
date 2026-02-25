const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3 / Tailwind", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "React", level: 75 },
  { name: "Git / GitHub", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
          <span className="gradient-cyber-text">Skills</span> & Tecnologias
        </h2>
        <div className="w-16 h-0.5 gradient-cyber mx-auto mb-12" />

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="font-pixel text-[8px] text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-cyber rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
