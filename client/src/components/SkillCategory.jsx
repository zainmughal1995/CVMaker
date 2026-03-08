// components/right/SkillCategory.jsx
// Single skill category

export default function SkillCategory({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-2">
      {/* Category Title */}
      <span className="font-semibold text-sm">{title}:</span>

      {/* Skills */}
      <span className="text-sm ml-1">
        {items.join(" | ")} {/* Skills separated with | */}
      </span>
    </div>
  );
}
