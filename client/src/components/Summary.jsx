// Summary.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged

export default function Summary({ summary }) {
  if (!summary) return null;

  const styles = {
    section: {
      marginBottom: "12px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      borderBottom: "1px solid #000",
    },
    spacer: {
      paddingTop: "4px",
      paddingBottom: "4px",
    },
    text: {
      fontSize: "14px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Summary <div style={styles.spacer}></div>
      </h2>

      <p style={styles.text}>{summary}</p>
    </section>
  );
}
