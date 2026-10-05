import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Certifications } from '../sections/Certifications';
import { Services } from '../sections/Services';
import { ResumeSection } from '../sections/ResumeSection';
import { Contact } from '../sections/Contact';
import { Footer } from '../components/Footer';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionList = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'certifications',
  'services',
  'contact',
];

export const Home = ({ theme, toggleTheme }) => {
  const { activeSection, scrollTo } = useActiveSection(sectionList);

  return (
    <div className="relative min-h-screen bg-[#fff9f6] dark:bg-[#120c18] text-[#18181b] dark:text-slate-100 cyber-grid selection:bg-[#e1306c] selection:text-white transition-colors duration-300">
      {/* Ambient Instagram gradient glow blobs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#f09433]/15 via-[#dc2743]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-24 w-[550px] h-[550px] bg-gradient-to-bl from-[#833ab4]/15 via-[#e1306c]/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#fcaf45]/12 to-[#fd1d1d]/8 rounded-full blur-[130px] pointer-events-none -z-10" />
      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollTo}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onNavigate={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Services onNavigate={scrollTo} />
        <ResumeSection />
        <Contact />
      </main>

      {/* Modern Cyber Footer */}
      <Footer onNavigate={scrollTo} />
    </div>
  );
};
