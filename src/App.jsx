import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import BlurBlob from "./components/BlurBlob.jsx";
import Certificates from "./components/Certificates.jsx";

function App() {

  return (
    <>
    <div className="bg-[#050414]">

      <BlurBlob />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
