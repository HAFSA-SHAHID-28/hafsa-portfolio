import Hero from "./components/hero/Hero";
import PageShell from "./components/layout/PageShell";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <PageShell>
      <Navbar />

      <main >
        <Hero/>
      </main>
    </PageShell>
  );
}

export default App;