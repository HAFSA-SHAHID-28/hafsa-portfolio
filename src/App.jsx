import PageShell from "./components/layout/PageShell";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <PageShell>
      <Navbar />

      <main className="min-h-screen pt-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            Portfolio Preview
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-text sm:text-6xl">
            Navbar Test
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
            Temporary content for testing the navigation system.
          </p>
        </div>
      </main>
    </PageShell>
  );
}

export default App;