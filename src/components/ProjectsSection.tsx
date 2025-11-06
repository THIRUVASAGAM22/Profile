import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates. Built with React and Firebase for seamless team productivity.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather forecast application with location-based data visualization. Integrates multiple weather APIs for accurate predictions.',
    tech: ['JavaScript', 'API Integration', 'Chart.js'],
    link: '#',
    github: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="hover-lift group border-border/50 flex flex-col"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button 
                  variant="default" 
                  className="flex-1"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
