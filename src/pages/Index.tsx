import { useDarkMode } from '@/hooks/useDarkMode';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <AboutSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
