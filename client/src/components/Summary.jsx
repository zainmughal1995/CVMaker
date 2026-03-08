export default function Summary({ summary }) {
  if (!summary) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold border-b mb-4">
        Summary <div className="py-1"></div>
      </h2>

      <p className="text-sm">{summary}</p>
    </section>
  );
}
