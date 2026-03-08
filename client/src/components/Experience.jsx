// components/right/Experience.jsx

export default function Experience({ experience }) {
  if (!experience) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg border-b mb-3">
        Experience<div className="py-1"></div>
      </h2>

      {experience.map((job, i) => (
        <div
          key={i}
          className="mb-4"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }} // FIX
        >
          <div className="flex justify-between">
            <span className="font-semibold">{job.role}</span>

            <span>
              [{job.start_date} – {job.end_date}]
            </span>
          </div>

          <div className="italic text-sm mb-1">{job.organization}</div>

          <ul className="list-disc ml-6 text-sm">
            {job.responsibilities?.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
