// Skills.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged

export default function Skills({ skills }) {
  if (!skills) return null;

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
    jobBlock: {
      marginBottom: "4px",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },
    category: {
      fontWeight: "600",
      fontSize: "14px",
    },
    items: {
      fontSize: "14px",
      marginLeft: "4px",
    },
  };

  return (
    <section style={styles.section}>
      {/* Heading block protected from page break */}
      <div style={styles.headingBlock}>
        <h2 style={styles.heading}>
          Skills
          <div style={styles.spacer}></div>
        </h2>
      </div>

      {Object.entries(skills).map(([key, items]) => (
        <div key={key} style={styles.jobBlock}>
          <span style={styles.category}>
            {key.replaceAll("_", " ").toUpperCase()}:
          </span>

          <span style={styles.items}>{items.join(" | ")}</span>
        </div>
      ))}
    </section>
  );
}
