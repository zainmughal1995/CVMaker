// components/right/EducationItem.jsx
// Single education entry with subjects inline

export default function EducationItem({ edu }) {
  return (
    <div className="mb-4">
      {/* Degree + Dates */}
      <div className="flex justify-between">
        <span className="font-semibold">{edu.degree}</span>

        <span className="italic text-gray-600">
          [{edu.start_date} – {edu.end_date}]
        </span>
      </div>

      {/* GPA */}
      {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}

      {/* Honors */}
      {edu.honors && (
        <div className="text-sm italic text-gray-700">{edu.honors}</div>
      )}

      {/* Subjects */}
      {edu.subjects && (
        <div className="text-sm mt-1">
          {edu.subjects.join(" | ")} {/* Join subjects with | */}
        </div>
      )}
    </div>
  );
}
