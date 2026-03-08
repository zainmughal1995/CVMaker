// components/right/ProjectsCategory.jsx
// Renders a single project category

export default function ProjectsCategory({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-3">
      {/* Category Title */}
      <div className="font-semibold text-sm">{title}</div>

      {/* Projects */}
      <div className="text-sm ml-2">
        {items.join(" | ")} {/* Projects separated by | */}
      </div>
    </div>
  );
}
