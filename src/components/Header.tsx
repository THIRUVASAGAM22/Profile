import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDark, toggleDarkMode }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">Portfolio</div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('certificates')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Certificates
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="ml-auto md:ml-0"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
