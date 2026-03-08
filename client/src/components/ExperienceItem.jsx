// components/right/ExperienceItem.jsx
// Single job entry

export default function ExperienceItem({ job }) {
  return (
    <div className="mb-5">
      {/* Role + Dates */}
      <div className="flex justify-between">
        <span className="font-semibold">{job.role}</span>

        {(job.start_date || job.end_date) && (
          <span className="italic text-gray-600">
            [{job.start_date} – {job.end_date}]
          </span>
        )}
      </div>

      {/* Organization */}
      {job.organization && (
        <div className="italic text-sm mb-1">{job.organization}</div>
      )}

      {/* Responsibilities */}
      {job.responsibilities && (
        <ul className="list-disc ml-6 text-sm space-y-1">
          {job.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      {/* Skills */}
      {job.skills && (
        <div className="text-sm mt-2 text-gray-800">
          <span className="font-semibold">Skills:</span>{" "}
          {job.skills.join(" | ")}
        </div>
      )}
    </div>
  );
}
