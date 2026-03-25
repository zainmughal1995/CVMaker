// Education.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged

export default function Education({ education }) {
  if (!education) return null;

  const styles = {
    section: {
      marginBottom: "12px",
    },
    heading: {
      fontSize: "18px",
      borderBottom: "1px solid #000",
    },
    spacer: {
      paddingTop: "4px",
      paddingBottom: "4px",
    },
    item: {
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
    },
    degree: {
      fontWeight: "600",
      fontSize: "14px",
    },
    date: {
      fontSize: "14px",
      color: "#374151",
    },
    gpa: {
      fontSize: "14px",
    },
    subjects: {
      fontSize: "10px",
      marginTop: "4px",
      color: "#808080", // Gray color
      fontWeight: "bold", // Bold text
      fontFamily: "sans-serif", // Sans font
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Education
        <div style={styles.spacer}></div>
      </h2>

      {education.map((edu, i) => (
        <div key={i} style={styles.item}>
          <div style={styles.row}>
            <span style={styles.degree}>{edu.degree}</span>

            <span style={styles.date}>
              [{edu.start_date} – {edu.end_date}]
            </span>
          </div>

          {edu.gpa && <div style={styles.gpa}>GPA: {edu.gpa}</div>}

          {edu.subjects && (
            <div style={styles.subjects}>{edu.subjects.join(" | ")}</div>
          )}
        </div>
      ))}
    </section>
  );
}
