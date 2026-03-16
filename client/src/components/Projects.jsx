// Projects.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged

export default function Projects({ projects }) {
  if (!projects) return null;

  const styles = {
    section: {
      marginBottom: "24px",
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
    block: {
      marginBottom: "8px",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },
    category: {
      fontWeight: "600",
      fontSize: "14px",
    },
    items: {
      fontSize: "14px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Projects
        <div style={styles.spacer}></div>
      </h2>

      {Object.entries(projects).map(([key, items]) => (
        <div key={key} style={styles.block}>
          <span style={styles.category}>
            {key.replaceAll("_", " ").toUpperCase()}
          </span>

          <div style={styles.items}>{items.join(" | ")}</div>
        </div>
      ))}
    </section>
  );
}
