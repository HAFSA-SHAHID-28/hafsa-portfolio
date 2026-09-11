import PageShell from "./components/layout/PageShell";
import Container from "./components/layout/Container";
import Section from "./components/layout/Section";
import Button from "./components/ui/Button";

function App() {
  return (
    <PageShell>
      <main>
        <Section>
          <Container>
            <div className="flex flex-wrap gap-4">
              <Button>
                View Work →
              </Button>

              <Button variant="secondary">
                Contact Me
              </Button>

              <Button variant="ghost">
                GitHub ↗
              </Button>
            </div>
          </Container>
        </Section>
      </main>
    </PageShell>
  );
}

export default App;