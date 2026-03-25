// components/right/Experience.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged

export default function Experience({ experience }) {
  if (!experience) return null;

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
    jobBlock: {
      marginBottom: "4px",
      pageBreakInside: "avoid",
      breakInside: "avoid",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
    },
    role: {
      fontWeight: "600",
    },
    organization: {
      fontStyle: "italic",
      fontSize: "14px",
    },
    list: {
      paddingLeft: "24px",
      fontSize: "12px",
      listStyleType: "disc", // Dots
    },
    listItem: {
      color: "#808080", // Gray color
      fontFamily: "sans-serif", // Sans font
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Experience
        <div style={styles.spacer}></div>
      </h2>

      {[...experience] // Clone array so original is not mutated
        .reverse() // Reverse order → latest jobs first
        .map((job, i) => (
          <div key={i} style={styles.jobBlock}>
            <div style={styles.row}>
              <span style={styles.role}>{job.role}</span>

              <span>
                [{job.start_date} – {job.end_date}]
              </span>
            </div>

            <div style={styles.organization}>{job.organization}</div>

            <ul style={styles.list}>
              {job.responsibilities?.map((r, idx) => (
                <li key={idx} style={styles.listItem}>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
}
