import { Code2, Database, Globe, Server } from 'lucide-react';

const skills = [
  { name: 'HTML5', category: 'Frontend', icon: Code2 },
  { name: 'CSS3', category: 'Frontend', icon: Code2 },
  { name: 'JavaScript', category: 'Frontend', icon: Code2 },
  { name: 'React.js', category: 'Frontend', icon: Globe },
  { name: 'Python', category: 'Backend', icon: Server },
  { name: 'C', category: 'Programming', icon: Code2 },
  { name: 'C++', category: 'Programming', icon: Code2 },
  { name: 'Bash', category: 'DevOps', icon: Server },
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'MySQL', category: 'Database', icon: Database },
  { name: 'Node.js', category: 'Backend', icon: Server },
  { name: 'Express.js', category: 'Backend', icon: Server },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
