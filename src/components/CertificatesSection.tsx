import { Award, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const certificates = [
  {
    title: 'Full Stack Web Development',
    institution: 'Udemy',
    date: '2025',
    link: '../../public/javascript.jpg',
    description: 'Comprehensive certification covering frontend and backend development with modern frameworks.',
  },
  {
    title: 'The Complete Python Pro',
    institution: 'Udemy',
    date: '2025',
    link: '../../public/python.jpg',
    description: 'Comprehensive certification covering frontend, backdend, automation and testing.',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certificates</span> & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and learning milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title}
              className="hover-lift group border-border/50"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription>{cert.institution} • {cert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  View Certificate
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
