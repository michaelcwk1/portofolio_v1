import Hero from "./components/Hero";
import ParticlesComponent from './components/ParticlesComponent'; // Pastikan jalur import benar

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio"; 
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <ParticlesComponent id="particles" className="particles" />
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-5 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Bio /> 
        <Projects />
        <Skills />
        <WorkExperience />
        {/* <EducationSection /> */}
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
