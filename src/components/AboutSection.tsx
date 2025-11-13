import { Download } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">THIRUVASAGAM Y</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            I'm a Full Stack Web Developer located in Chennai. I've done comprehensive training in Full Stack Web Development and Python Full Stack, 
            I’ve gained experience in both front-end and back-end technologies, equipping me with the skills to take a project from concept to deployment.
          </p>
          <p className="text-lg text-muted-foreground/90 mb-10 max-w-2xl mx-auto">
            I love building responsive, user-friendly applications that make a difference. 
            With expertise in both frontend and backend development, I bring ideas to life through clean code and thoughtful design.
          </p>
          <Button 
            onClick={handleDownload}
            size="lg"
            className="group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
