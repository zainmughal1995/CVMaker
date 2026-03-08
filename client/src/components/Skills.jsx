export default function Skills({ skills }) {
  if (!skills) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg border-b mb-3">
        Skills<div className="py-1"></div>
      </h2>

      {Object.entries(skills).map(([key, items]) => (
        <div
          key={key}
          className="mb-1"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <span className="font-semibold text-sm">
            {key.replaceAll("_", " ").toUpperCase()}:
          </span>

          <span className="text-sm ml-1">{items.join(" | ")}</span>
        </div>
      ))}
    </section>
  );
}
