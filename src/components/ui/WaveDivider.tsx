export default function WaveDivider({
  from = "dark",
  to = "white",
}: {
  from?: "dark" | "white" | "light";
  to?: "dark" | "white" | "light";
}) {
  const colors = {
    dark: "#111827",
    white: "#ffffff",
    light: "#f9fafb",
  };

  return (
    <div className="wave-divider" style={{ backgroundColor: colors[from] }}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L48 8C96 16 192 32 288 37.3C384 42.7 480 37.3 576 32C672 26.7 768 21.3 864 24C960 26.7 1056 37.3 1152 40C1248 42.7 1344 37.3 1392 34.7L1440 32V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0V0Z"
          fill={colors[to]}
        />
      </svg>
    </div>
  );
}
