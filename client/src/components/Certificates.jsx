// Certificates.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged
// Page-break safe blocks added (same pattern as Skills)

export default function Certificates({ certificates }) {
  if (!certificates) return null;

  const styles = {
    section: {
      marginBottom: "24px",
    },

    headingBlock: {
      marginBottom: "4px",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },

    heading: {
      fontSize: "18px",
      borderBottom: "1px solid #000",
      marginBottom: "12px",
    },

    spacer: {
      paddingTop: "4px",
      paddingBottom: "4px",
    },

    certBlock: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      fontSize: "14px",
      marginBottom: "4px",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },

    name: {},

    date: {
      textAlign: "center",
    },

    issuer: {
      textAlign: "right",
    },
  };

  return (
    <section style={styles.section}>
      {/* Heading protected from page breaks */}
      <div style={styles.headingBlock}>
        <h2 style={styles.heading}>
          Certifications
          <div style={styles.spacer}></div>
        </h2>
      </div>

      {certificates.map((cert, i) => (
        <div key={i} style={styles.certBlock}>
          <div style={styles.name}>{cert.name}</div>

          <div style={styles.date}>{cert.date}</div>

          <div style={styles.issuer}>{cert.issuer}</div>
        </div>
      ))}
    </section>
  );
}
