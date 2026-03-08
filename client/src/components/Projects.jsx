export default function Projects({ projects }) {
  if (!projects) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg border-b mb-3">
        Projects<div className="py-1"></div>
      </h2>

      {Object.entries(projects).map(([key, items]) => (
        <div
          key={key}
          className="mb-2"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <span className="font-semibold text-sm">
            {key.replaceAll("_", " ").toUpperCase()}
          </span>

          <div className="text-sm">{items.join(" | ")}</div>
        </div>
      ))}
    </section>
  );
}
