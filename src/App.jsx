import { useState } from "react";

import Hero from "./components/hero/Hero";
import LoadingScreen from "./components/loading/LoadingScreen";
import PageShell from "./components/layout/PageShell";
import Navbar from "./components/navigation/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PageShell>
      {isLoading && (
        <LoadingScreen
          onComplete={() => setIsLoading(false)}
        />
      )}

      <Navbar />

      <main>
        <Hero isLoaded={!isLoading} />
        <About />
        <Skills/>
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </PageShell>
  );
}

export default App;