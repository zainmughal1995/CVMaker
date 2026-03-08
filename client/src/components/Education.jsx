export default function Education({ education }) {
  if (!education) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg border-b mb-3">
        Education<div className="py-1"></div>
      </h2>

      {education.map((edu, i) => (
        <div
          key={i}
          className="mb-3"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div className="flex justify-between">
            <span className="font-semibold text-sm">{edu.degree}</span>

            <span className="text-sm text-[#374151]">
              [{edu.start_date} – {edu.end_date}]
            </span>
          </div>

          {edu.gpa && <div className="text-sm ">GPA: {edu.gpa}</div>}

          {edu.subjects && (
            <div className="text-sm mt-1">{edu.subjects.join(" | ")}</div>
          )}
        </div>
      ))}
    </section>
  );
}
