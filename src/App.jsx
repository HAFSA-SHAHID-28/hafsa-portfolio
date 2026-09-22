import { useState } from "react";

import Hero from "./components/hero/Hero";
import LoadingScreen from "./components/loading/LoadingScreen";
import PageShell from "./components/layout/PageShell";
import Navbar from "./components/navigation/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

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
      </main>
    </PageShell>
  );
}

export default App;