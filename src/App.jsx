import { useState } from "react";

import Hero from "./components/hero/Hero";
import LoadingScreen from "./components/loading/LoadingScreen";
import PageShell from "./components/layout/PageShell";
import Navbar from "./components/navigation/Navbar";
import About from "./components/about/About";
import Capabilities from "./components/capabilities/Capabilities";

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
        <Capabilities />
      </main>
    </PageShell>
  );
}

export default App;