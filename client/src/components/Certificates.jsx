export default function Certificates({ certificates }) {
  if (!certificates) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg border-b mb-3">
        Certifications<div className="py-1"></div>
      </h2>

      {certificates.map((cert, i) => (
        <div
          key={i}
          className="grid grid-cols-3 text-sm mb-1"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div>{cert.name}</div>

          <div className="text-center">{cert.date}</div>

          <div className="text-right">{cert.issuer}</div>
        </div>
      ))}
    </section>
  );
}
