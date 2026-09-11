const PageShell = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-text">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(124,92,255,0.08),transparent_28%)]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {children}
    </div>
  );
};

export default PageShell;