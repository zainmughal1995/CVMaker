// components/right/CertificateItem.jsx
// Single certificate row

export default function CertificateItem({ cert }) {
  return (
    <div className="grid grid-cols-3 text-sm mb-1">
      {/* Certificate Name */}
      <div className="col-span-1">{cert.name}</div>

      {/* Date */}
      <div className="text-center">{cert.date}</div>

      {/* Issuer */}
      <div className="text-right">{cert.issuer}</div>
    </div>
  );
}
